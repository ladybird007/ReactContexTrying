const initialState = {
  menu: [],
  loading: true,
  items: [],
  total: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MENU_REQUESTED':
      return {
        ...state,
        menu: state.menu,
        loading: true
      }; 
    case 'MENU_LOADED':
      return {
        ...state,
        menu: action.payload,
        loading: false
      };
    case 'MENU_ERROR':
      return {
        menu: state.menu,
        loading: true
      };
    case 'ITEM_ADD_TO_CART': 
      const id = action.payload;
      const item = state.menu.find(item => item.id === id);
      const newItem = {
        title: item.title,
        price: item.price,
        url: item.url,
        id: item.id
      };
 
      const sumWithInitial = state.items.reduce(
        (acc, curr) => acc + curr.price,
        newItem.price
      );

      return {
        ...state,
        items: [
          ...state.items,
          newItem
        ],
        total: sumWithInitial
      };
    case 'ITEM_DELETE_FROM_CART':
      const idx = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === idx);
      console.log(itemIndex);
      return {
        ...state,
        items: [
          ...state.items.slice(0, itemIndex),
          ...state.items.slice(itemIndex + 1)
        ]
      }
    default: 
      return state;
  }
}

export default reducer;