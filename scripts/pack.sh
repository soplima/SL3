PACKAGE=__package

if [ -d $PACKAGE ]; then
    rm -rf $PACKAGE
fi

mkdir -p $PACKAGE

mv dist/* $PACKAGE/ 2>/dev/null || true
cp -r scripts $PACKAGE
