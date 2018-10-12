// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var rotation =90;


$.image.addEventListener('click', function(e){
  var rotateMatrix= Ti.UI.create2DMatrix({
    rotate: rotation
  });
  rotation+=90;
  if(rotation>360){
    rotation=0;
  }
  var rotateAnimation= Ti.UI.createAnimation({
    duration:250,
    transform:rotateMatrix
  });
  $.image.animate(rotateAnimation);
});



// Ti.UI.setBackgroundColor('white');
// var win = Ti.UI.createWindow({
//   title: 'Click window to test',
//   backgroundColor: 'white'
// });

// var opts = {
//   cancel: 2,
//   options: ['Confirm', 'Help', 'Cancel'],
//   selectedIndex: 2,
//   destructive: 0,
//   title: 'Delete File?'
// };

// win.addEventListener('click', function(e){
//   var dialog = Ti.UI.createOptionDialog(opts).show();
// });
// win.open();

// var args = $.args;

