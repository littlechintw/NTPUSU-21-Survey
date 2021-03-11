npm run build
cd dist
git init
echo "ntpu-demo1.littlechin.tw" > CHAME
git add .
git commit -m 'Update the gh_page'
# git push origin :gh-pages
# git subtree push --prefix dist origin gh-pages
git push -f git@github.com:littlechintw/NTPUSU-21-Survey.git master:gh-pages
