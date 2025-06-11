async function readContent(event) {
  const file = event.target.files.item(0)
  const text = await file.text();
  
  let costumeurl = text.costumeurl
}
