const colorPicker = document.querySelector('# colorpicker');
colorPicker.addEventListener('input', function () {
  // 選択されたカラーを取得する
  const selectedColor = colorPicker.value;
  console.log(selectedColor);
});