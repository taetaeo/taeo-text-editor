#!/bin/bash

set -e

echo "테스트 환경 실행"

cd example || { echo "exmaple 디렉토리 이동 실패"; exit 1; }

echo "현재 경로 : $(pwd)"

yarn run dev

echo "테스트 환경 실행"