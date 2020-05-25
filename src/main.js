// after
{
  const newNode = dom.create("<div>test</div>");
  const ref = document.querySelector("#after1");
  dom.after(ref, newNode);
}
{
  const newNode = dom.create("<div>test</div>");
  const ref = document.querySelector("#before2");
  dom.before(ref, newNode);
}
{
  const newNode = dom.create("<div>test</div>");
  const ref = document.querySelector("#append");
  dom.append(ref, newNode);
}
{
  const node = document.querySelector("#wrap1");
  dom.wrap(node, "<footer></footer>");
}
{
  const node = document.querySelector("#remove1");
  console.log(dom.remove(node));
}
{
  const node = document.querySelector("#empty");
  console.log(dom.empty(node));
}
{
  const node = document.querySelector("#attr");
  dom.attr(node, "name", "rust");
  console.log(node);
}
