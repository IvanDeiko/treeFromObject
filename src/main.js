const tree = {
  "Рыбы": {
    "Форель": {},
    "Щука": {}
  },

  "Деревья": {
    "Хвойные": {
      "Лиственница": {},
      "Ель": {}
    },
    "Цветковые": {
      "Берёза": {},
      "Тополь": {}
    }
  }
};

const containerTree = document.createElement('div');
document.body.append(containerTree);

function createTree(container, data) {
 const ul = document.createElement('ul')
 for (let key in data) {
   const li = document.createElement('li');
   li.innerHTML = key;
   ul.append(li);
   if (Object.keys(key).length) {
     createTree(li, data[key])
   }
   container.append(ul);
  }
}


createTree(containerTree, tree)