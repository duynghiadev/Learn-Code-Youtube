echo "switching to branch master"
git checkout master

echo "Building app..."
yarn build

echo "Deploying files to server..."
scp -r build/* vuluu2k@20.213.237.53:/var/www/go-live/html

echo "Done!"