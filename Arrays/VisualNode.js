function VisualNode(xLoc, yLoc, rWidth, rHeight) {
	this.xLoc = xLoc;
	this.yLoc = yLoc;
	this.rWidth = rWidth;
	this.rHeight = rHeight;

	this.display = function() {
		rect(this.xLoc, this.yLoc, this.rWidth, this.rHeight);
	};
}