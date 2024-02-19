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
      const dubler = state.items.find(item => item.id === id);
      const dublerIndex = state.items.findIndex(item => item.id === id);
      let newItemsAdd = [];

      if (dubler) {
        dubler.count +=1;
        const newDubler = {
          title: dubler.title,
          price: item.price * dubler.count,
          url: dubler.url,
          id: dubler.id,
          count: dubler.count
        }
        newItemsAdd = [
          ...state.items.slice(0, dublerIndex),
          newDubler,
          ...state.items.slice(dublerIndex + 1)
        ];
      } else {
        const newItem = {
          title: item.title,
          price: item.price,
          url: item.url,
          id: item.id,
          count: 1
        };
        newItemsAdd = [
          ...state.items,
          newItem
        ];
      }

      const sumWithInitial = state.items.reduce(
        (total, current) => {
          return total += current.price
        },
        item.price
      );

      return {
        ...state,
        items: newItemsAdd,
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