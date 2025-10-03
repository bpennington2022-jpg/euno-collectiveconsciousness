# Euno Collective Consciousness — GitHub Pages (Jekyll)

Edit content in this repo and publish with GitHub Pages. Built with Jekyll + minima.

### Local preview (optional)
Requires Ruby and Bundler.

```bash
bundle install
bundle exec jekyll serve
```

Open http://localhost:4000

### Publish on GitHub Pages
1) Create a GitHub repo (public recommended). If this is a user/org site, name it `<username>.github.io`; otherwise any name is fine.

2) Push this folder to GitHub:
```bash
git remote add origin https://github.com/<YOUR_USERNAME>/<REPO_NAME>.git
git push -u origin main
```

3) Enable Pages: GitHub → Repository → Settings → Pages → Build and deployment
- Source: Deploy from a branch
- Branch: main, Folder: /(root)

After a minute, your site will be live.
- User/Org site: https://<YOUR_USERNAME>.github.io
- Project site: https://<YOUR_USERNAME>.github.io/<REPO_NAME>

Notes:
- Set `url` and `baseurl` in `_config.yml` after you know the final URL.
- Edit `index.md`, `about.md`, or add posts under `_posts/`.
