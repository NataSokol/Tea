
const { Like } = require('../db/models')

class LikeServices {

  static getOneLike = async (userId, teaId) => {
    const likeInDb = await Like.findOne({ where: { userId, teaId } })
    return likeInDb ? true : false
  }
  static createLike = async ({ userId, teaId }) => {

    const likeIn = await this.getOneLike(userId, teaId);
    if (likeIn) {
      return 'like already';
    }
    const like = await Like.create({ userId, teaId });
    return like.get();
  };

  static deleteLike= async (userId, teaId)=>{
    const likeIn = await this.getOneLike(userId, teaId);
    if (likeIn) {
     await Like.destroy({where : { userId, teaId }});
    return 'like delete' ;
    }
    
    return 'like no';

  }

}

module.exports = LikeServices;