mkdir src
cd src 
mkdir sass
cd sass
mkdir abstracts pages components base
touch style.scss

# create files in abstracts directory
touch abstracts/_colors.scss
touch abstracts/_typography.scss

# create files in base directory
touch base/_reset.scss
touch base/_global.scss

# create files in pages directory
touch pages/_home.scss

# create files in components directory
# touch components/

# move files in src folder
cd ../../
mv index.html src/
mv design src/
mv images src/
