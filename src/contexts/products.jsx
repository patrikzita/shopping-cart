import { createContext, useReducer} from "react";
import axios from "axios";

export const ProductStateContext = createContext();
export const ProductDispatchContext = createContext();

const initialState = {
  products: [],
  isLoaded: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCT_SUCCES":
      return {
        ...state,
        isLoaded: true,
        products: action.payload.products,
      };
    case "GET_PRODUCT_FAILURE": 
    return{
      ...state,
      isLoaded: false
    }
    
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductDispatchContext.Provider value={dispatch}>
      <ProductStateContext.Provider value={state}>
        {children}
      </ProductStateContext.Provider>
    </ProductDispatchContext.Provider>
  );
}

export const getProducts = (dispatch) => {
  const url = "http://localhost:3500/products";
  axios
    .get(url)
    .then((response) => {
      dispatch({
        type: "GET_PRODUCT_SUCCES",
        payload: { products: response.data },
      });
    })
    .catch((error) => {
      console.error(error);
      dispatch({ type: "GET_PRODUCT_FAILURE" });
    });
};

export default ProductProvider;
