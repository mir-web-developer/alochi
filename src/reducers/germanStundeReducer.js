const initialState = {
    stunde: [
        {
          key: "1",
          title: "Title 1",
          content:
            "Men biletni 3kun oldin sotib oldim. Men 12-aprelda uchmoqchiman.",
            stundeGaps: [
              {original:"o'zbek tilida",translate:"tarjimasi"},
              {original:"o'zbek tilida",translate:"tarjimasi"},
              {original:"o'zbek tilida",translate:"tarjimasi"},
              {original:"o'zbek tilida",translate:"tarjimasi"},
                ],
        },
        {
          key: "2",
          title: "Title 2",
          content:
            "Men biletni 3kun oldin sotib oldim. Men 12-aprelda uchmoqchiman.",
            stundeGaps: [
              {original:"o'zbek  tilida tilida",translate:"tarjimasi"},
              {original:"o'zbek tilida",translate:"tarjimasi"},
                ],
        },
        
      ],
}
  
  
  
  export const germanStundeReducer = (state = initialState, action) => {
    switch (action.type) {
      
        default: return state
    }
  };
  