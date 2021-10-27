var main = function () {
  /**
 *********************************************************************
 *                                                                   *
 *                   Here is my logo designed to be                  *
 *                       animatable for an intro                     *
 *                                                                   *
 *                     @spencerlepine Made 7/31/17                   *
 *                                                                   *
 *********************************************************************
**/


  var logoX = 0;
  var logoY = 79;

  var logo = function () {
    this.draw = function (x, y, w, h, size) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.s = size;
      // Second Thing
      // {
      // filter(BLUR,6);
      // fill(0, 0, 0);
      // this.x -=5;
      // this.y -= 5;
      // // 1
      // triangle(this.x+(this.w/14.2)*this.s,this.y+(this.h/25)*this.s,this.x+(this.w/3.8)*this.s,this.y+(this.h/25)*this.s,this.x+(this.w/4.8)*this.s,this.y+(this.h/4.2)*this.s);
      // // 2
      // triangle(this.x+(this.w/14.2857143)*this.s,this.y+(this.h/25)*this.s,this.x+(this.w/4.2)*this.s,this.y+(this.h/7.40)*this.s,this.x+(this.w/4.8)*this.s,this.y+(this.h/4.2)*this.s);
      // // 3
      // triangle(this.x+(this.w/3.7)*this.s,this.y+(this.h/13)*this.s,this.x+(this.w/3.7)*this.s,this.y+(this.h/3.9)*this.s,this.x+(this.w/4.8)*this.s,this.y+(this.h/3.2)*this.s);
      // // 4
      // triangle(this.x+(this.w/3.7)*this.s,this.y+(this.h/6.0)*this.s,this.x+(this.w/3.7)*this.s,this.y+(this.h/3.9)*this.s,this.x+(this.w/4.8)*this.s,this.y+(this.h/3.2)*this.s);
      // // 5
      // triangle(this.x+(this.w/26.666)*this.s,this.y+(this.h/33.33)*this.s,this.x+(this.w/5.00)*this.s,this.y+(this.h/2.87)*this.s,this.x+(this.w/3.9)*this.s,this.y+(this.h/1.5)*this.s);
      // // 6
      // triangle(this.x+(this.w/26.666)*this.s,this.y+(this.h/33.33)*this.s,this.x+(this.w/7.1)*this.s,this.y+(this.h/2.24)*this.s,this.x+(this.w/3.9)*this.s,this.y+(this.h/1.5)*this.s);
      // // 7
      // triangle(this.x+(this.w/36.4)*this.s,this.y+(this.h/2.5)*this.s,this.x+(this.w/8.4)*this.s,this.y+(this.h/2.1)*this.s,this.x+(this.w/36.4)*this.s,this.y+(this.h/1.5)*this.s);
      // // 8
      // triangle(this.x+(this.w/13.6)*this.s,this.y+(this.h/2.28)*this.s,this.x+(this.w/8.4)*this.s,this.y+(this.h/2.1)*this.s,this.x+(this.w/36.4)*this.s,this.y+(this.h/1.5)*this.s);// 9
      // triangle(this.x+(this.w/7.4)*this.s,this.y+(this.h/2.0)*this.s,this.x+(this.w/4.2)*this.s,this.y+(this.h/1.5)*this.s,this.x+(this.w/22.0)*this.s,this.y+(this.h/1.5)*this.s);
      // // 10
      // triangle(this.x+(this.w/11.1)*this.s,this.y+(this.h/1.7)*this.s,this.x+(this.w/4.2)*this.s,this.y+(this.h/1.5)*this.s,this.x+(this.w/22.0)*this.s,this.y+(this.h/1.5)*this.s);
      // // LETTER TWO
      // // 12
      // triangle(this.x+(this.w/3.3)*this.s,this.y+(this.h/27.5)*this.s,this.x+(this.w/2.9)*this.s,this.y+(this.h/5.8)*this.s,this.x+(this.w/2.9)*this.s,this.y+(this.h/2.9)*this.s);
      // // 12.5
      // triangle(this.x+(this.w/3.3)*this.s,this.y+(this.h/27.5)*this.s,this.x+(this.w/3.3)*this.s,this.y+(this.h/2.2)*this.s,this.x+(this.w/2.9)*this.s,this.y+(this.h/2.9)*this.s);
      // // 13
      // triangle(this.x+(this.w/3.3)*this.s,this.y+(this.h/27.5)*this.s,this.x+(this.w/3.3)*this.s,this.y+(this.h/2.2)*this.s,this.x+(this.w/3.04)*this.s,this.y+(this.h/2.6)*this.s);
      // // 14
      // triangle(this.x+(this.w/3.3)*this.s,this.y+(this.h/1.98)*this.s,this.x+(this.w/2.9)*this.s,this.y+(this.h/2.5)*this.s,this.x+(this.w/3.3)*this.s,this.y+(this.h/1.5)*this.s);
      // // 15
      // triangle(this.x+(this.w/2.9)*this.s,this.y+(this.h/1.89)*this.s,this.x+(this.w/2.9)*this.s,this.y+(this.h/2.5)*this.s,this.x+(this.w/3.3)*this.s,this.y+(this.h/1.5)*this.s);
      // // 16
      // triangle(this.x+(this.w/2.4)*this.s,this.y+(this.h/1.89)*this.s,this.x+(this.w/2.8)*this.s,this.y+(this.h/1.86)*this.s,this.x+(this.w/3.18)*this.s,this.y+(this.h/1.5)*this.s);
      // // 16.5
      // triangle(this.x+(this.w/2.4)*this.s,this.y+(this.h/1.89)*this.s,this.x+(this.w/2.42)*this.s,this.y+(this.h/1.78)*this.s,this.x+(this.w/3.15)*this.s,this.y+(this.h/1.5)*this.s);
      // // 17
      // triangle(this.x+(this.w/2.49)*this.s,this.y+(this.h/1.5)*this.s,this.x+(this.w/2.42)*this.s,this.y+(this.h/1.78)*this.s,this.x+(this.w/3.15)*this.s,this.y+(this.h/1.5)*this.s);
      // // 18
      // triangle(this.x+(this.w/2.33)*this.s,this.y+(this.h/1.89)*this.s,this.x+(this.w/2.18)*this.s,this.y+(this.h/1.89)*this.s,this.x+(this.w/2.42)*this.s,this.y+(this.h/1.5)*this.s);
      // // 19
      // triangle(this.x+(this.w/2.42)*this.s,this.y+(this.h/1.5)*this.s,this.x+(this.w/2.18)*this.s,this.y+(this.h/1.89)*this.s,this.x+(this.w/2.26)*this.s,this.y+(this.h/1.5)*this.s);
      // }
      // this.x += 5;
      // this.y += 5;
      // 1
      fill(255, 255, 255);
      triangle(this.x + (this.w / 14.2) * this.s, this.y + (this.h / 25) * this.s, this.x + (this.w / 3.8) * this.s, this.y + (this.h / 25) * this.s, this.x + (this.w / 4.8) * this.s, this.y + (this.h / 4.2) * this.s);
      // 2
      fill(235, 235, 235);
      triangle(this.x + (this.w / 14.2857143) * this.s, this.y + (this.h / 25) * this.s, this.x + (this.w / 4.2) * this.s, this.y + (this.h / 7.40) * this.s, this.x + (this.w / 4.8) * this.s, this.y + (this.h / 4.2) * this.s);
      // 3
      fill(255, 255, 255);
      triangle(this.x + (this.w / 3.7) * this.s, this.y + (this.h / 13) * this.s, this.x + (this.w / 3.7) * this.s, this.y + (this.h / 3.9) * this.s, this.x + (this.w / 4.8) * this.s, this.y + (this.h / 3.2) * this.s);
      // 4
      fill(235, 235, 235);
      triangle(this.x + (this.w / 3.7) * this.s, this.y + (this.h / 6.0) * this.s, this.x + (this.w / 3.7) * this.s, this.y + (this.h / 3.9) * this.s, this.x + (this.w / 4.8) * this.s, this.y + (this.h / 3.2) * this.s);
      // 5
      fill(255, 255, 255);
      triangle(this.x + (this.w / 26.666) * this.s, this.y + (this.h / 33.33) * this.s, this.x + (this.w / 5.00) * this.s, this.y + (this.h / 2.87) * this.s, this.x + (this.w / 3.9) * this.s, this.y + (this.h / 1.5) * this.s);
      // 6
      fill(235, 235, 235);
      triangle(this.x + (this.w / 26.666) * this.s, this.y + (this.h / 33.33) * this.s, this.x + (this.w / 7.1) * this.s, this.y + (this.h / 2.24) * this.s, this.x + (this.w / 3.9) * this.s, this.y + (this.h / 1.5) * this.s);
      // 7
      fill(255, 255, 255);
      triangle(this.x + (this.w / 36.4) * this.s, this.y + (this.h / 2.5) * this.s, this.x + (this.w / 8.4) * this.s, this.y + (this.h / 2.1) * this.s, this.x + (this.w / 36.4) * this.s, this.y + (this.h / 1.5) * this.s);
      // 8
      fill(235, 235, 235);
      triangle(this.x + (this.w / 13.6) * this.s, this.y + (this.h / 2.28) * this.s, this.x + (this.w / 8.4) * this.s, this.y + (this.h / 2.1) * this.s, this.x + (this.w / 36.4) * this.s, this.y + (this.h / 1.5) * this.s);// 9
      fill(255, 255, 255);
      triangle(this.x + (this.w / 7.4) * this.s, this.y + (this.h / 2.0) * this.s, this.x + (this.w / 4.2) * this.s, this.y + (this.h / 1.5) * this.s, this.x + (this.w / 22.0) * this.s, this.y + (this.h / 1.5) * this.s);
      // 10
      fill(235, 235, 235);
      triangle(this.x + (this.w / 11.1) * this.s, this.y + (this.h / 1.7) * this.s, this.x + (this.w / 4.2) * this.s, this.y + (this.h / 1.5) * this.s, this.x + (this.w / 22.0) * this.s, this.y + (this.h / 1.5) * this.s);
      // LETTER TWO
      // 12
      fill(255, 255, 255);
      triangle(this.x + (this.w / 3.3) * this.s, this.y + (this.h / 27.5) * this.s, this.x + (this.w / 2.9) * this.s, this.y + (this.h / 5.8) * this.s, this.x + (this.w / 2.9) * this.s, this.y + (this.h / 2.9) * this.s);
      // 12.5
      triangle(this.x + (this.w / 3.3) * this.s, this.y + (this.h / 27.5) * this.s, this.x + (this.w / 3.3) * this.s, this.y + (this.h / 2.2) * this.s, this.x + (this.w / 2.9) * this.s, this.y + (this.h / 2.9) * this.s);
      // 13
      fill(235, 235, 235);
      triangle(this.x + (this.w / 3.3) * this.s, this.y + (this.h / 27.5) * this.s, this.x + (this.w / 3.3) * this.s, this.y + (this.h / 2.2) * this.s, this.x + (this.w / 3.04) * this.s, this.y + (this.h / 2.6) * this.s);
      // 14
      fill(255, 255, 255);
      triangle(this.x + (this.w / 3.3) * this.s, this.y + (this.h / 1.98) * this.s, this.x + (this.w / 2.9) * this.s, this.y + (this.h / 2.5) * this.s, this.x + (this.w / 3.3) * this.s, this.y + (this.h / 1.5) * this.s);
      // 15
      fill(235, 235, 235);
      triangle(this.x + (this.w / 2.9) * this.s, this.y + (this.h / 1.89) * this.s, this.x + (this.w / 2.9) * this.s, this.y + (this.h / 2.5) * this.s, this.x + (this.w / 3.3) * this.s, this.y + (this.h / 1.5) * this.s);
      // 16
      fill(255, 255, 255);
      triangle(this.x + (this.w / 2.4) * this.s, this.y + (this.h / 1.89) * this.s, this.x + (this.w / 2.8) * this.s, this.y + (this.h / 1.86) * this.s, this.x + (this.w / 3.18) * this.s, this.y + (this.h / 1.5) * this.s);
      // 16.5
      triangle(this.x + (this.w / 2.4) * this.s, this.y + (this.h / 1.89) * this.s, this.x + (this.w / 2.42) * this.s, this.y + (this.h / 1.78) * this.s, this.x + (this.w / 3.15) * this.s, this.y + (this.h / 1.5) * this.s);
      // 17
      fill(235, 235, 235);
      triangle(this.x + (this.w / 2.49) * this.s, this.y + (this.h / 1.5) * this.s, this.x + (this.w / 2.42) * this.s, this.y + (this.h / 1.78) * this.s, this.x + (this.w / 3.15) * this.s, this.y + (this.h / 1.5) * this.s);
      // 18
      fill(255, 255, 255);
      triangle(this.x + (this.w / 2.33) * this.s, this.y + (this.h / 1.89) * this.s, this.x + (this.w / 2.18) * this.s, this.y + (this.h / 1.89) * this.s, this.x + (this.w / 2.42) * this.s, this.y + (this.h / 1.5) * this.s);
      // 19
      fill(235, 235, 235);
      triangle(this.x + (this.w / 2.42) * this.s, this.y + (this.h / 1.5) * this.s, this.x + (this.w / 2.18) * this.s, this.y + (this.h / 1.89) * this.s, this.x + (this.w / 2.26) * this.s, this.y + (this.h / 1.5) * this.s);
    };
  };

  var Logo = new logo();

  draw = function () {
    background(255, 255, 255);
    Logo.draw(logoX, logoY, 320, 120, 2.6);
  };

}

const logo = {
  PROJECT_NAME: 'Logo',
  PROJECT_LINK: 'https://www.khanacademy.org/computer-programming/logo/5247892378025984',
  main,
}