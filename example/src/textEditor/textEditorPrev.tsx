import type { TextOptions } from "fabric/fabric-impl";
import { fabric } from "fabric";
import * as R from "react";

import { isEmptyObject, keepLastOccurrence, refineRTEstyles } from "./utils";

export interface TextEditorPreviewProps extends R.HTMLAttributes<HTMLElement>, R.PropsWithChildren {
  width?: number;
  height?: number;
  previewList: any;
}

const TextEditorPrev = ({ className, width, height, previewList, style, ...rest }: TextEditorPreviewProps) => {
  const canvasRef = R.useRef<HTMLCanvasElement>(null);
  const [preview, setPreview] = R.useState<fabric.StaticCanvas | null>(null);

  R.useEffect(() => {
    if (!width || !height || !canvasRef.current) return;

    // 미니맵 캔버스 생성
    // Static
    const previewCanvasModel = new fabric.StaticCanvas(canvasRef.current, {
      width: width,
      height: height,
      backgroundColor: "#fff",
    });

    // const clonedObjects = fabric.util.object.clone(objects);

    // const clonedObjectList = Object.keys(clonedObjects).map((object) => clonedObjects[object]);

    const updateMinimap = (previewList: any[]) => {
      previewCanvasModel.clear();

      if (isEmptyObject(previewList)) return;

      previewList?.map((paragraph, parentIndex: number) => {
        let tempArray: any[] = [];
        let bottom: number = 0;
        paragraph.map((data: any, childIndex: number) => {
          const styles = keepLastOccurrence(refineRTEstyles(data.styles));

          let styleObject: TextOptions = {};

          styles.map((style) => {
            const [type, option] = style.split("_");

            // Font Size
            if (type === "size") {
              styleObject = { ...styleObject, fontSize: +option || 12 };
            }
            // Font Color
            else if (type === "color") {
              styleObject = { ...styleObject, fill: option };
            }
          });

          const fontSize = styleObject.fontSize || 16;

          const textModel = new fabric.Text(data.text, {
            width: data.width,

            height: data.height,
            left: data.left,
            top: data.top,
            fontFamily: "Arial",
            fontSize,
            ...styleObject,
          } as any);

          tempArray.push(textModel);

          if (tempArray.length === 0) return;

          bottom = Math.max(...tempArray.map((obj) => obj.top! + obj.height!));
        });

        tempArray.forEach((obj) => {
          obj.set({ top: bottom - obj.fontSize! });

          previewCanvasModel.add(obj);
        });

        tempArray = [];
      });

      setPreview(previewCanvasModel);
      previewCanvasModel.renderAll();
    };
    updateMinimap(previewList);

    return () => {
      // previewCanvasModel.clear();
    };
  }, [width, height, previewList]);

  return <canvas id="textEditor-canvas2" className={className} ref={canvasRef!} style={style} {...rest} />;
};

export default TextEditorPrev;
