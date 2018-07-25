const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

var slap = [
        "https://static.quizur.com/i/b/57ace4339784b8.86431255twice-3.jpg",
        "http://cdn2.tstatic.net/tribunnews/foto/bank/images/twice_20180328_104035.jpg",
        "https://img.okezone.com/content/2017/05/16/205/1692694/foto-comeback-terbaru-twice-berhasil-raih-all-kill-zBZDdHjdpK.jpg",
        "http://cdn2.tstatic.net/manado/foto/bank/images/twice_20171028_011712.jpg",
        "https://www.billboard.com/files/media/twice-brand-new-girl-2018-billboard-1548.jpg",
        "https://inikpop.com/wp-content/uploads/2017/11/Thumbnail-media-sosial-twice.jpg",
        "http://poskotanews.com/cms/wp-content/uploads/2017/07/twice.jpg",
        "https://www.sbs.com.au/popasia/sites/sbs.com.au.popasia/files/styles/full/public/twice-63.jpg?itok=WhEEE977&mtime=1513306518",
        "https://upload.wikimedia.org/wikipedia/commons/2/24/%2817.05.26%29%EB%AE%A4%EC%A7%81%EB%B1%85%ED%81%AC_TWICE.jpg",
        "http://img.jakpost.net/c/2016/10/31/2016_10_31_14972_1477910727._large.jpg",
        "https://s-media-cache-ak0.pinimg.com/originals/07/bf/2c/07bf2c51da65201c48cd711eff30b8ab.jpg",
        "https://3.bp.blogspot.com/-Ai72Adw2Mj8/WN7eYtCNS3I/AAAAAAAAIGs/gvgJZtg80A83ddSTLmE0gEtTohMR6TQPwCLcB/s1600/c-twice-bangkok-2017.jpg",
        "https://www.wowkeren.com/images/photo/twice.jpg",
        "https://www.allkpop.com/upload/2018/03/af_org/21113425/twice-honey-popcorn.jpg",
        "https://i.cbc.ca/1.4382812.1509568041!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/twice.jpg",
        "https://pbs.twimg.com/media/DbJvKmtVAAEX2Wh.jpg",
        "https://vignette.wikia.nocookie.net/twicenation/images/1/11/Twice-TT.jpg/revision/latest?cb=20170428161422",
        "http://kpopdrama.info/editor/upload/20171205/twice_1512400134_16_sp.jpg",
        "http://i.pinimg.com/736x/dc/ec/14/dcec149d78f2b9c3d17a2b32f642b7a6.jpg",
        "https://vignette.wikia.nocookie.net/twicenation/images/3/36/WhatIsLove_Mina_1.jpg/revision/latest?cb=20180327154639",
        "http://creativedisc.com/web/wp-content/uploads/2017/05/EXO-twice.jpg",
        "http://v.phinf.naver.net/20171111_243/1510364958206f9eVN_PNG/upload_%C6%AE%BF%CD%C0%CC%BD%BATV6_EP02_A_0000641224ms.png?type=f886_499",
        "http://www.dreamers.id/img_artikel/32momotwicetaksengajapukulfans.jpg",
        "https://connectommy.jp/wp-content/uploads/2017/12/52615746.jpeg",
        "http://lovetwice.club/wp-content/uploads/2017/03/twice3.jpg",
        "https://8000001.jp/wp-content/uploads/2017/10/TWICE_%E3%83%9F%E3%83%8A%E3%80%80%E7%94%BB%E5%83%8F-1.png",
        "http://astrokentico.s3.amazonaws.com/rojakdaily/media/jessica-chua/entertainment/2018/apr/twice%20concert%20in%20malaysia/twice.png?ext=.png",
        "https://vignette.wikia.nocookie.net/kpop/images/d/d5/TWICE_Cheer_Up_Teaser_3_Mina.png/revision/latest?cb=20160611175942",
        "https://img00.deviantart.net/58f7/i/2016/175/e/b/twice_cheer_up_mina____ombre_beanie_concept_edit_by_cononkudo-da0wlty.jpg",
        "http://cdn2.tstatic.net/style/foto/bank/images/momo-twice_20170202_130506.jpg",
]
var embed = new Discord.RichEmbed()
        .setDescription(`Random Twice :D`)
        .setImage(slap[Math.floor(Math.random() * slap.length)])
.setColor("#4b00a3")
message.channel.send(embed)


}

exports.help = {
  name: "twice"
}
