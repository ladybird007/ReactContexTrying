const initialState = {
  menu: [],
  loading: true,
  items: [],
  total: 0,
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
      let newItem = {
        title: item.title,
        price: item.price,
        url: item.url,
        id: item.id,
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
        total: sumWithInitial,
      };
      
    case 'ITEM_DELETE_FROM_CART':
      const idx = action.payload;
      const itemRemove = state.menu.find(item => item.id === idx);
      const diffWithInitial = state.total - itemRemove.price;
      const newItems = state.items.filter((item) => item.id !== idx);

      return {
        ...state,
        items: newItems,
        total: diffWithInitial
      }
    default: 
      return state;
  }
}

export default reducer;