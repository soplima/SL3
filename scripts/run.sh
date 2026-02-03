PACKAGE = __package

if [ -d $PACKAGE ]; then
    find . -maxdepth 1 ! -name '__package' ! -name '.' -exec rm -rf {} +
    mv __package/* .
    rm -rf __package
fi
