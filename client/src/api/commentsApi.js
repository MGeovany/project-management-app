 export const getComments = async () => {
    return [
    ];
 };

 export const createComment = async (text, userId, parentId) => {
    return {
      id: Math.random().toString(36).substr(2, 9), 
      content: text,
      parentId: null,
      userId: userId,
      createdAt: Date(),
    };
  };
  
  export const updateComment = async ( text) => {
    return {text};
  };
  
  export const deleteComment = async () => {
    return {};
  };