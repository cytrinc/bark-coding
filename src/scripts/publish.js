async function getprojectcontent(event) {
  const file = event.target.files.item(0)
  const text = await file.text();
  
  return text;
}

