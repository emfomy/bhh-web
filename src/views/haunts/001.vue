<template>
  <Haunt>
    <template slot="zh-title">木乃伊橫行</template>
    <template slot="en-title">The Mummy Walks</template>

    <template slot="hero">

      <section class="font-story">
        <p>房內塵土飛揚，你心中閃過不祥的陰霾。你聽見你其中一個朋友放聲大叫，聲音中充滿了欣喜與恐懼。一段冰冷、消沉的聲音在你心中顫抖：</p>
        <blockquote>「我失去我的妻子遠超過你所能理解之時日。縱使淚已成灰，愛仍熾熱如日。今我愛人已為我重生。你必不能使我等分離⋯若你膽敢阻擾，我必將你靈魂生吞活剝。」</blockquote>
      </section>

      <hr />

      <section>
        <h4>此刻</h4>
        <ul>
          <li><p>將２枚<Token name="Knowledge Roll" />放到一旁備用。</p></li>
          <li><p>叛徒失去<Omen name="Girl" />預兆卡以及從她獲得的所有效果。取而代之，他將一枚<Monster small name="magenta" />（代表<Omen name="Girl" />），擺放到任何與作祟揭露房間同樓層，並且距離<Monster name="Mummy" />五格以上的房間。如果沒有距離五格以上的房間，則擺放到盡量越遠越好。</p></li>
          <li><p>當有玩家進到和<Omen name="Girl" />同一房間時，該玩家自動持有<Omen name="Girl" />預兆卡。</p></li>
        </ul>
      </section>

      <section>
        <h4>對於壞人你知道</h4>
        <p>叛徒致力達成<Monster name="Mummy" />與<Omen name="Girl" />的婚事。</p>
      </section>

      <section>
        <h4>你獲勝於⋯</h4>
        <p>⋯在<Monster name="Mummy" />娶到<Omen name="Girl" />之前，將其驅散回亡者之國時。</p>
      </section>

      <section>
        <h4>如何驅散<Monster brief name="Mummy" /></h4>
        <ul>
          <li><p>如果<Omen name="Book" />還未被探索的話，當有英雄下次探索到有預兆符號的新房間時，即搜尋預兆牌庫並抽將其取出。</p></li>
          <li><p>你必需說出<Monster brief name="Mummy" />的真名以驅散它。為此，你必需依照順序完成下列步驟。每一位英雄在一回合中只能嘗試其中一個步驟。</p>
            <ol>
              <li><p>
                英雄可以在下列房間內進行知識檢定達 6+ 嘗試找出<Monster brief name="Mummy" />的真名：
                <ul>
                  <li>有〈石棺 Sarcophagus〉的房間，研究象形文字；</li>
                  <li><Room name="Research Laboratory" />，瀏覽考古團隊的筆記；</li>
                  <li><Room name="Library" />，研究<Monster brief name="Mummy" />的歷史；</li>
                </ul>
                如果你成功了，拿取１枚<Token name="Knowledge Roll" />。
              </p></li>
              <li><p>在你找出<Monster brief name="Mummy" />真名之後，持有<Omen brief name="Book" />的英雄可以進行知識檢定達 6+ 嘗試在<Omen brief name="Book" />中找出<Monster brief name="Mummy" />的真名並學會驅散它的咒語。如果你成功了，拿取１枚<Token name="Knowledge Roll" />。</p></li>
              <li><p>當你獲得２枚<Token name="Knowledge Roll" />之後，把<Omen brief name="Book" />帶到<Monster brief name="Mummy" />所在的房間。任何和<Monster brief name="Mummy" />及<Omen brief name="Book" />在同一間房間內的英雄可以進行神志攻擊以擊敗<Monster brief name="Mummy" />，以此完成咒語並永久驅散<Monster brief name="Mummy" />。</p></li>
            </ol>
          </li>
          <li><p><Monster brief name="Mummy" />對速度攻擊免疫（例如<Item name="Revolver" />、<Item name="Dynamite" />）。</p></li>
        </ul>
      </section>

      <hr />

      <section class="font-story">
        <h4>如果你獲勝⋯</h4>
        <p>在你猛力合上古書時，房間內掀起一陣溫熱且乾燥的風。木乃伊蹣跚地走向你，它死寂的眼中充滿絕望。當它就要掐住你的喉嚨時，它的雙手忽然碎裂了。隨 著它的身體逐漸崩解並隨熱風飛散，那生物呻吟著：</p>
        <blockquote>「我的妻子⋯我唯一摰愛⋯永世⋯不見⋯」</blockquote>
        <p>隨著最後一片木乃伊消失，風停了。只剩下你形單影隻。</p>
      </section>

    </template>

    <template slot="traitor">

      <section class="font-story">
        <p>在你面前的牆壁振動並滑開，顯露出一具古代石棺，它彎曲的棺蓋遍佈灰塵與象形文字。象形文字發出柔和的光芒，吸引你靠近。一道刺耳的話語滑進你的心靈，說道：</p>
        <blockquote>「我失去我的妻子遠超過你所能理解之時日。縱使淚已成灰，愛仍熾熱如日。今我愛人已為我重生。生者切勿阻撓我與其重逢。」</blockquote>
        <p>隨著聲音消逝，你笑了。顯而易見。為了讓愛人重逢，你的朋友們必需死。當棺蓋滑開，你面向你的新朋友⋯你的新神。</p>
      </section>

    </template>
  </Haunt>
</template>

<script>
import Haunt from '@/components/bhh/haunt/haunt.vue';

export default {
  components: {
    Haunt,
  },
};
</script>
