# Taipei 3N4D Guidebook

정적 HTML/CSS/JS로 만든 대구-타이베이 3박 4일 여행 가이드북입니다.

## Local Preview

```bash
python3 -m http.server 4173
```

브라우저에서 `http://localhost:4173`을 열면 됩니다.

## GitHub Pages

1. 이 폴더를 Git 저장소로 초기화하고 GitHub 저장소로 푸시합니다.
2. 기본 브랜치를 `main`으로 맞춥니다.
3. GitHub 저장소의 `Settings > Pages`에서 `Build and deployment`를 `GitHub Actions`로 둡니다.
4. `main` 브랜치에 푸시하면 `.github/workflows/deploy-pages.yml`이 정적 파일을 배포합니다.

저장소 이름이 `<username>.github.io`가 아니면 배포 주소는 보통 `https://<username>.github.io/<repo>/` 형태입니다. 현재 페이지는 상대 경로만 사용하므로 저장소명 하위 경로에서도 동작합니다.
