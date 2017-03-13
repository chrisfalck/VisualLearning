function VisualArray() {
	this.visualNodes = [];

	this.horizontalSpacing = 10;

	this.createNodes = function(numNodes, startX, startY, rWidth, rHeight) {
		this.currX = startX;
		this.currY = startY;
		for (let i = 0; i < numNodes; ++i) {
			this.visualNodes.push(
				new VisualNode(this.currX, this.currY, rWidth, rHeight)
			);
			this.currX = this.currX + rWidth + this.horizontalSpacing;
		}
	};

	this.getNodes = function() {
		return this.visualNodes;
	};
}