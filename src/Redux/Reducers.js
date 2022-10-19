const initState = {
  links: [
    {
      id: 0,
      language: "Javascript",
      content: `let array = ["H", "e", "l", "l", "o"]; 

  for (let i = 0; i < array.length; i++ ){
        console.log(array[i]);
  }`,
    },
    { id: 1, language: "Typescript" },
    { id: 2, language: "Java" },
  ],
};

const Reducer = (state = initState, action) => {
  return state;
};

export default Reducer;
