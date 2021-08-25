// OOP 객체지향 프로그래밍 

// 생성자 함수

function Song1(title, writer, singer, released) {
  this.title = title;
  this.writer = writer;
  this.singer = singer;
  this.released = new Date(released);
  this.getSongInfo = function () {
    return `제목: ${this.title}, 작곡: ${this.writer}, 가수: ${this.singer}`;
  }
}

Song1.prototype.getReleasedDay = function () {
  return this.released.getDay();
}

// 인스턴스
const song1 = new Song1('Love yourself', 'eminem', 'eminem', '1998-07-11');
const song2 = new Song1('hater', 'joe', 'joe', '2012-03-16');


// Class 문법

class Song {
  constructor(title, writer, singer, released) {
    this.title = title;
    this.writer = writer;
    this.singer = singer;
    this.released = new Date(released);
  }
  getReleasedDay() {
    return this.released.getDay();
  }
  getSongInfo() {
    return `제목: ${this.title}, 작곡: ${this.writer}, 가수: ${this.singer}`;
  }
}

const song3 = new Song('Love yourself', 'eminem', 'eminem', '1998-07-11');
const song4 = new Song('hater', 'joe', 'joe', '2012-03-16');


console.log(song3.getSongInfo(), song4.getSongInfo());