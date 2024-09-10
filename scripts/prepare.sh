#!/bin/bash

set -e

echo "패키지 설치 시작"

# package 디렉토리로 이동
cd package || { echo "text-ediotr package 디렉토리 이동 실패"; exit 1; }

echo "현재 경로: $(pwd)"

# 의존성 설치
yarn || { echo "yarn 설치 실패"; exit 1; }

# Rollup 빌드
npx rollup -c || { echo "npx rollup -c 실패"; exit 1; }

echo "Text Editor 설치 완료"
