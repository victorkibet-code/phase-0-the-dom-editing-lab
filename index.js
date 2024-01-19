describe("within index.html", () => {
    it("contains an <h1> tag", () => {
      expect(document.querySelector('h1').innerHTML).to.include('My HTML adventure');
    });
  
    it("contains a <p> tag", () => {
      expect(document.querySelector('body p')).to.not.be.null;
    });
  
    it("within the <p>, it contains a <strong> tag", () => {
      expect(document.querySelector('p strong')).to.not.be.null;
    });
  
    it("within the <p>, it contains an <em> tag", () => {
      expect(document.querySelector('p em')).to.not.be.null;
    });
  
    it("within the <p>, it contains an <a> tag", () => {
      expect(document.querySelector('p a')).to.not.be.null;
    });
  
    it("within the <body>, it contains an <table> tag", () => {
      expect(document.querySelector('body').innerHTML).to.include('table');
    });
  });
  