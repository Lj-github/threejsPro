var LineGroup = (function () {
    function LineGroup() {
    }
    LineGroup.drawLine = function (scale) {
        var grop = new eui.Group();
        var shape = new egret.Shape();
        var col = this.getRandomColor();
        var lineWidth = 2;
        this.lineToBezier(shape, lineWidth, col, { x: 0, y: 100 }, { x: 50, y: 50 }, { x: 100, y: 100 });
        this.lineToBezier(shape, lineWidth, col, { x: 100, y: 100 }, { x: 150, y: 50 }, { x: 200, y: 100 });
        this.lineToLine(shape, lineWidth, col, { x: 200, y: 100 }, { x: 100, y: 250 });
        this.lineToLine(shape, lineWidth, col, { x: 100, y: 250 }, { x: 0, y: 100 });
        //shape.graphics.lineStyle(3,<any>this.getRandomColor();
        //shape.graphics.moveTo( 300, 300);
        //shape.graphics.curveTo( 700,700, 100,10);
        // shape.graphics.lineStyle( 2, <any>this.getRandomColor() );
        // shape.graphics.moveTo( 200,100 );
        // shape.graphics.lineTo( 100, 250 );
        //shape.graphics.lineStyle( 2, <any>this.getRandomColor() );
        // shape.graphics.moveTo( 100,250 );
        //shape.graphics.lineTo( 0, 100 );
        egret.callLater(function () {
            grop.anchorOffsetX = 100;
            grop.anchorOffsetY = 150;
        }, this);
        shape.graphics.endFill();
        shape["color"] = col;
        shape.name = "shape";
        grop.addChild(shape);
        grop.name = "lineGroup";
        return grop;
    };
    LineGroup.getRandomColor = function () {
        return '0x' +
            (function (color) {
                return (color += '0123456789abcdef'[Math.floor(Math.random() * 16)])
                    && (color.length == 6) ? color : arguments.callee(color);
            })('');
    };
    LineGroup.lineToBezier = function (shape, lineWidth, color, pos1, pos2, pos3) {
        if (shape) {
            shape.graphics.lineStyle(lineWidth, color);
            shape.graphics.moveTo(pos1.x, pos1.y);
            shape.graphics.curveTo(pos2.x, pos2.y, pos3.x, pos3.y);
        }
    };
    LineGroup.lineToLine = function (shape, lineWidth, color, pos1, pos2) {
        if (shape) {
            shape.graphics.lineStyle(lineWidth, color);
            shape.graphics.moveTo(pos1.x, pos1.y);
            shape.graphics.lineTo(pos2.x, pos2.y);
        }
    };
    return LineGroup;
}());
