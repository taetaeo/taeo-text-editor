type ClassValue = string | number | ClassDictionary | ClassArray | undefined | null | boolean;
interface ClassDictionary {
  [key: string]: boolean | undefined | null;
}
interface ClassArray extends Array<ClassValue> {}

export default function classNames(...args: ClassValue[]): string {
  const classes: string[] = [];

  args.forEach((arg) => {
    if (!arg) return;

    const argType = typeof arg;

    if (argType === "string" || argType === "number") {
      classes.push(arg.toString());
    } else if (Array.isArray(arg)) {
      classes.push(classNames(...arg));
    } else if (argType === "object") {
      Object.keys(arg).forEach((key) => {
        // Type assertion to tell TypeScript that arg is a ClassDictionary
        if ((arg as ClassDictionary)[key]) {
          classes.push(key);
        }
      });
    }
  });

  return classes.join(" ");
}
