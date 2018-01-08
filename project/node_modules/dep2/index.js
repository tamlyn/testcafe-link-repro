class Base {
  do() {
    console.log(`Yep`)
  }
}

class Thing extends Base {
  async do() {
    super.do()
  }
}

module.exports = Thing