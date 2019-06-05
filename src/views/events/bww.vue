<template>
  <b-card-text class="d-flex flex-wrap justify-content-between">

    <EventCard class="m-2" series="BWW" name="Acupuncture">
      <template slot="zh-title">針刺</template>
      <template slot="story">
        房內點滿了令人愉悅的蠟燭，一名黑色長髮的女人穿著樸素外衣，用著溫暖的微笑歡迎你的到來。女人舉起一根在燭光下閃閃發光、比她頭髮還要細的長針，幾乎就要刺入你的眼裡⋯
      </template>
      <Roll0>立即移至任一相鄰的房間。失去１級神志，或是進行力量檢定嘗試反抗：</Roll0>
      <RollL>
        <RollT>5+</RollT>
          <RollD>獲得１級力量、１級速度、２級神志。</RollD>
        <RollT>3-4</RollT>
          <RollD>獲得１級力量和１級速度。</RollD>
        <RollT>0-2</RollT>
          <RollD>失去１級力量和１級速度。</RollD>
      </RollL>
    </EventCard>

    <EventCard class="m-2" series="BWW" name="Burial Mound">
      <template slot="zh-title">墳塚</template>
      <template slot="story">
        散落的碎石掩埋著一具新鮮的屍體⋯太新鮮了⋯
      </template>
      <p>放置一枚<Token name="Burial Mound" />在此房。</p>
      <p>作祟發生後，任何探險者離開此房間時皆受到死屍的攻擊。其右方的玩家代替死屍，進行力量４的攻擊。</p>
      <p>若探險者獲得 3+ 以上的勝利，移除<Token name="Burial Mound" />。</p>
    </EventCard>

    <EventCard class="m-2" series="BWW" name="Contract">
      <template slot="zh-title">契約</template>
      <template slot="story">
        這裡有份以靈魂為代價，給予你力量的契約。好契約不簽嗎？
      </template>
      <p>你可自由選擇是否簽署此契約。</p>
      <Roll0>若你決定簽署此契約，進行一次知識檢定以閱讀此文件：</Roll0>
      <RollL>
        <RollT>5+</RollT>
          <RollD>你發現這份契約並未綁約，你成功留住了靈魂。獲得１級神志、並抽取１張道具卡。</RollD>
        <RollT>4</RollT>
          <RollD>你發現了可以保住靈魂的小漏洞。抽取１張道具卡。</RollD>
        <RollT>2-3</RollT>
          <RollD>你失去了靈魂，但獲得了力量。失去１級神志、並抽取１張道具卡。</RollD>
        <RollT>0-1</RollT>
          <RollD>你的靈魂沒有價值，白簽了。失去１級神志。</RollD>
      </RollL>
    </EventCard>

    <EventCard class="m-2" series="BWW" name="Flytrap">
      <template slot="zh-title">捕蠅草</template>
      <template slot="story">
        一株巨大詭異的植物聳立在燈光及各種管線間。它的葉子枯黃、巨大的花莢半開，期待著營養的補給。它需要水分⋯你的血⋯
      </template>
      <p>立即受到１顆骰的物理傷害。</p>
      <p>放置一枚<Token name="Plant" />在此房。</p>
      <p>作祟發生後，任何探險者或怪物進入此房間時，你可以代替捕蠅草，對該對手進行力量７的攻擊。</p>
    </EventCard>

    <EventCard class="m-2" series="BWW" name="Ghost in The Machine">
      <template slot="zh-title">鬼入鏡</template>
      <template slot="story">
        一陣劈哩啪啦的聲響，伴隨著各種駭人的影像，在眼前的電視機內閃爍著。透過白花花的雜訊，你辨識出一個女孩，在這宅邸內某處玩耍。她停下動作並轉頭，向你招手示意加入他的遊戲。正當你還沒回過神來，電視螢幕已陷入一片黑暗⋯
      </template>
      <Roll0>請立即進行神志檢定：</Roll0>
      <RollL>
        <RollT>3+</RollT>
          <RollD>抽取一張頂樓的房間板塊，放入宅邸內，並移至該處。</RollD>
        <RollT>0-2</RollT>
          <RollD>失去１點力量，並保留此卡一回合。到你下一個回合開始前，所有探險者的行動步數降至１格。</RollD>
      </RollL>
    </EventCard>

    <EventCard class="m-2" series="BWW" name="Lightning Strikes">
      <template slot="zh-title">閃電擊</template>
      <template slot="story">
        從看到閃電時開始讀秒。兩秒。
      </template>
      <Roll0>所有位於戶外或樓頂的探險者，立即進行力量檢定：</Roll0>
      <RollL>
        <RollT>4+</RollT>
          <RollD>什麼事也沒發生。</RollD>
        <RollT>1-3</RollT>
          <RollD>受到１點物理傷害。</RollD>
        <RollT>0</RollT>
          <RollD>受到２點物理傷害。</RollD>
      </RollL>
    </EventCard>

    <EventCard class="m-2" series="BWW" name="Misty Arch">
      <template slot="zh-title">迷霧拱門</template>
      <template slot="story">
        一座被彩色迷霧籠罩的拱門⋯
      </template>
      <p>你可自由選擇是否走進此拱門。</p>
      <Roll0>若你決定走進此拱門，請立即擲３顆骰子：</Roll0>
      <RollL>
        <RollT>5-6</RollT>
          <RollD>移至任何一間有尚未探索之門的房間，並抽取１張道具卡。</RollD>
        <RollT>3-4</RollT>
          <RollD>移至任何一間有尚未探索之門的房間。</RollD>
        <RollT>1-2</RollT>
          <RollD>你不知為何發生了變化。移至<Room name="Entrance Hall" />，將你的角色卡翻面，並重置所有數值至起始值。</RollD>
        <RollT>0</RollT>
          <RollD>移至<Room name="Entrance Hall" />，並棄掉一張道具卡。</RollD>
      </RollL>
    </EventCard>

    <EventCard class="m-2" series="BWW" name="Mutant Housepet">
      <template slot="zh-title">異變寵物</template>
      <template slot="story">
        從牆壁傳來一聲貓叫聲。真的是貓嗎？你這麼想著。接著從同一個位置要爆出了一聲嚎叫。難道兩隻貓？但搔抓的聲音要只有一個。難道他有兩個頭？你試著將牆面鑿開一探究竟⋯
      </template>
      <Roll0>請立即進行一次速度檢定：</Roll0>
      <RollL>
        <RollT>4+</RollT>
          <RollD>你成功躲開異變寵物的攻擊。獲得１點速度和１點神志。</RollD>
        <RollT>0-3</RollT>
          <RollD>異變寵物對你咬了一口。受到１顆骰的物理傷害。</RollD>
      </RollL>
    </EventCard>

    <EventCard class="m-2" series="BWW" name="The Left Hand">
      <template slot="zh-title">左手</template>
      <template slot="story">
        你的手開始發癢，然後燒了起來！疼動不斷蔓延，而你只能尖叫，並試圖把它與你的身體分離！但尖叫聲在喉嚨嘎然而止。突然，你發現自己沒有任何感覺，你試圖動動手指，卻發現那手彷彿有意識的向你的喉嚨靠近⋯
      </template>
      <Roll0>請選擇一項：</Roll0>
      <RollL>
        <RollT>•</RollT>
          <RollD>切除你的手。失去１點力量，並提升１點神智。</RollD>
        <RollT>•</RollT>
          <RollD>替換你的手。失去１點力量，並抽取１張物品卡。</RollD>
        <RollT>•</RollT>
          <RollD>保留你的手。失去２點神志，並提升１點力量。移往最鄰近有預兆圖示的房間，並抽取１張預兆卡。</RollD>
      </RollL>
    </EventCard>

    <EventCard class="m-2" series="BWW" name="The Walls Have Eyes">
      <template slot="zh-title">牆上有眼</template>
      <template slot="story">
        牆上掛著一排褪色的肖像畫，他們的眼睛看似跟隨著你的行動。難道這只是畫像的把戲？不，這些沈默的死人臉正試著告訴你什麼事⋯
      </template>
      <Roll0>請立即進行一次神志檢定：</Roll0>
      <RollL>
        <RollT>4+</RollT>
          <RollD>移至<Room name="Arsenal" />，並抽取１張物品卡。（若<Room name="Arsenal" />尚未探索，將其找出並放進屋內。）</RollD>
        <RollT>3</RollT>
          <RollD>獲得１級知識。</RollD>
        <RollT>3</RollT>
          <RollD>失去１級神志。</RollD>
      </RollL>
    </EventCard>

    <EventCard class="m-2" series="BWW" name="What Year is It!?">
      <template slot="zh-title">今夕是何夕</template>
      <template slot="story">
        你穿過那道門並停下腳步，你發現自己似乎曾在幾年前來過此處。窗映射出你的樣貌，而你的臉龐看起來是那麼的年輕。不過這次你早已不再天真⋯
      </template>
      <p>失去１點神志，並獲得１點力量和１點知識。</p>
      <p>若作祟已經發生，則另一方必須大聲朗讀他們劇本上的斜體字開場白及獲勝的故事文字。若作祟尚未發生，保留此牌直到作祟發生為止。</p>
    </EventCard>

  </b-card-text>
</template>

<script>
import EventCard from '@/components/bhh/card/event.vue';

export default {
  name: 'EventsBWW',
  components: {
    EventCard,
  },
};
</script>
