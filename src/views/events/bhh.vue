<template>
  <b-card-text class="d-flex flex-wrap justify-content-between">

    <EventCard class="m-2" series="BHH" name="A Moment of Hope">
      <template slot="zh-title">希望時刻</template>
      <template slot="story">
        房間湧現出不可思議的正面能量，<br />似乎有什麼正努力對抗著<br />這屋子裡的邪惡勢力。
      </template>
      <p>放置一枚<Token name="Blessing" />在此房。</p>
      <p>此後，在此房內進行的任何檢定，皆多擲１顆骰（至多８顆）。</p>
      <p>戰鬥不算檢定。</p>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="Angry Being">
      <template slot="zh-title">惱人的生物</template>
      <template slot="story">牠從牆上的黏液中冒出。<br />而且⋯就在你身邊⋯</template>
      <Roll0>請立即進行速度檢定：</Roll0>
      <RollL>
        <RollT>5+</RollT>
          <RollD>你將他們遠遠甩開！獲得１級速度。</RollD>
        <RollT>2-4</RollT>
          <RollD>受到１顆骰的精神傷害。</RollD>
        <RollT>0-1</RollT>
          <RollD>受到１顆骰的精神傷害，和１顆骰的物理傷害。</RollD>
      </RollL>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="Bloody Vision">
      <template slot="zh-title">血腥幻象</template>
      <template slot="story">
        牆壁因血液而潮濕，<br />鮮血從天花板不停滴下，<br />流過牆壁、傢俱，直到你的鞋子⋯<br />轉眼之間，又全都消失⋯
      </template>
      <Roll0>請立即進行神志檢定：</Roll0>
      <RollL>
        <RollT>4+</RollT>
          <RollD>你撐過去了！獲得１級神志。</RollD>
        <RollT>2-3</RollT>
          <RollD>失去１級神志。</RollD>
        <RollT>0-1</RollT>
          <RollD>你神志不清，突然攻擊１名跟你同房或相鄰房間的探險者或怪物（力量最低者）。</RollD>
      </RollL>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="Burning Man">
      <template slot="zh-title">燃燒之人</template>
      <template slot="story">
        全身著火的男子從房間跑過，<br />濃膩的水泡在皮膚上冒出並破裂，<br />最後只剩下炙熱的頭骨，<br />頭顱撞擊至地面後，持續滾動⋯
      </template>
      <Roll0>請立即進行神志檢定：</Roll0>
      <RollL>
        <RollT>4+</RollT>
          <RollD>除了衣領下有些悶熱外，一切安好。獲得１級神志。</RollD>
        <RollT>2-3</RollT>
          <RollD>快走，快走！你必須趕快離開！移至<Room name="Entrance Hall"/>。</RollD>
        <RollT>0-1</RollT>
          <RollD>你被烈焰所牽制，火花在你身上爆開。當你逃開時，受到１顆骰的物理傷害。</RollD>
      </RollL>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="Closet Door">
      <template slot="zh-title">壁櫥</template>
      <template slot="story">
        壁櫥的門半掩著，<br />裡面肯定有什麼東西躲藏著⋯
      </template>
      <p>放置一枚<Token name="Closet" />在此房。</p>
      <Roll0>每回合一次，任何探險者皆可擲２顆骰子嘗試打開壁櫥：</Roll0>
      <RollL>
        <RollT>4</RollT>
          <RollD>抽取１張道具卡。</RollD>
        <RollT>2-3</RollT>
          <RollD>抽取１張事件卡。</RollD>
        <RollT>0-1</RollT>
          <RollD>抽取１張事件卡，並移除標記。</RollD>
      </RollL>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="Creepy Crawlies">
      <template slot="zh-title">恐怖爬蟲</template>
      <template slot="story">
        成千上萬的爬蟲，<br />落在你的皮膚上，<br />鑽進衣服、頭髮之中⋯
      </template>
      <Roll0>請立即進行神志檢定：</Roll0>
      <RollL>
        <RollT>5+</RollT>
          <RollD>一眨眼，牠們全都消失了。獲得１級神志。</RollD>
        <RollT>1-4</RollT>
          <RollD>失去１級神志。</RollD>
        <RollT>0</RollT>
          <RollD>失去２級神志。</RollD>
      </RollL>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="Creepy Puppet">
      <template slot="zh-title">陰森傀儡</template>
      <template slot="story">
        散亂的雜物中，<br />你發現一個令你毛骨悚然的傀儡。<br />在你們四目相接時，<br />他突然拿起小小的矛向你跳去⋯
      </template>
      <p>你的右方的玩家代替傀儡，對你的進行力量４的攻擊。</p>
      <p>若你因此受傷，除你以外擁有<Omen name="Spear" />的玩家，獲得２級力量。</p>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="Debris">
      <template slot="zh-title">瓦礫</template>
      <template slot="story">
        泥灰從天花板及牆上不斷掉落⋯
      </template>
      <Roll0>請立即進行速度檢定：</Roll0>
      <RollL>
        <RollT>3+</RollT>
          <RollD>你閃過了泥灰！獲得１級速度。</RollD>
        <RollT>1-2</RollT>
          <RollD>你被瓦礫活埋！受到１顆骰的物理傷害。</RollD>
        <RollT>0</RollT>
          <RollD>你被瓦礫活埋！受到２顆骰的物理傷害。</RollD>
      </RollL>
      <p>若被活埋，保留此卡，並無法再進行任何行動或使用物品，直到掙脫為止。</p>
      <p>此後每回合一次，你皆可進行力量檢定達 4+ 嘗試掙脫。其他探險者也能用此方法幫你掙脫。</p>
      <p>若檢定三次失敗，你自動掙脫並丟棄此卡，從下回合開始正常行動。</p>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="Disquieting Sounds">
      <template slot="zh-title">令人不安的聲響</template>
      <template slot="story">
        嬰兒的哭泣聲殷殷響起，<br />控訴著被遺棄的命運。<br />緊接著是一聲尖叫，<br />以及刺耳的玻璃碎裂聲⋯<br />接著，一切恢復寂靜⋯
      </template>
      <Roll0>擲６顆骰子：</Roll0>
      <RollL>
        <RollT>•</RollT>
          <RollD>若結果大於或等於已被翻出的預兆卡數量，獲得１級神志。</RollD>
        <RollT>•</RollT>
          <RollD>反之，失去１級神志。</RollD>
      </RollL>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="Drip… Drip… Drip…">
      <template slot="zh-title">滴⋯滴⋯滴⋯</template>
      <template slot="story">
        一段有節奏的聲音刺激你的腦袋⋯
      </template>
      <p>放置一枚<Token name="Drip" />在此房。</p>
      <p>此後，在此房間進行的任何檢定，皆少擲１顆骰子（至少１顆）。</p>
      <p>戰鬥不算檢定。</p>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="Footsteps">
      <template slot="zh-title">腳印</template>
      <template slot="story">
        地板沉緩地發出嘎軋的聲響，<br />塵土向上飛揚，骯髒的地板上<br />浮現了一步步的腳印。<br />而就在它們快碰到你時，<br />卻消失了⋯
      </template>
      <Roll0>請立即擲１顆骰（如果你位於<Room name="Crypt" />，多擲１顆）：</Roll0>
      <RollL>
        <RollT>4</RollT>
          <RollD>你和離你最近的探險者皆獲得１級力量。</RollD>
        <RollT>3</RollT>
          <RollD>你獲得１級力量，但離你最近的探險者失去１級神志。</RollD>
        <RollT>2</RollT>
          <RollD>你失去１級神志。</RollD>
        <RollT>1</RollT>
          <RollD>你失去１級速度。</RollD>
        <RollT>0</RollT>
          <RollD>所有探險者皆失去１級任意屬性。</RollD>
      </RollL>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="Funeral">
      <template slot="zh-title">葬儀</template>
      <template slot="story">
        你看見一口打開的棺材，<br />而你正躺在裡面⋯
      </template>
      <Roll0>請立即進行神志檢定：</Roll0>
      <RollL>
        <RollT>4+</RollT>
          <RollD>一眨眼，全都消失了。獲得１級神志。</RollD>
        <RollT>2-3</RollT>
          <RollD>幻覺使你心神不寧。失去１級神志。</RollD>
        <RollT>0-1</RollT>
          <RollD>你真的躺在棺材裡！為了把自己從棺材裡挖出來，你失去１級力量和１級神志。<br>若<Room name="Crypt"/>或<Room name="Graveyard"/>已被探索，移至其中之一。</RollD>
      </RollL>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="Grave Dirt">
      <template slot="zh-title">墳土飛揚</template>
      <template slot="story">
        這房間覆蓋著一層厚厚的墳土，<br />塵土飄至皮膚，<br />你吸入肺中而咳嗽⋯
      </template>
      <Roll0>請立即進行力量檢定：</Roll0>
      <RollL>
        <RollT>4+</RollT>
          <RollD>你將塵土拍落。獲得１級力量。</RollD>
        <RollT>0-3</RollT>
          <RollD>事情不太對勁！保留此卡。每當你的回合開始時，受到１顆骰的物理傷害。</RollD>
      </RollL>
      <p>若你回合結束時，停留在<Room name="Balcony" />、<Room name="Gardens" />、<Room name="Graveyard" />、<Room name="Gymnasium" />、<Room name="Larder" />、<Room name="Patio" />、<Room name="Tower" />，或是因道具卡而讓任一屬性升級時，丟棄此卡並回復正常。</p>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="Groundskeeper">
      <template slot="zh-title">園丁</template>
      <template slot="story">
        你轉身看見一名穿園丁服的男人，<br />他舉起鏟子，朝你衝來。<br />而就在鏟子快擊中你時，<br />卻消失了，只留下滿地的泥濘⋯
      </template>
      <Roll0>請立即進行知識檢定（如果你位於<Room name="Gardens" />，少擲２顆）：</Roll0>
      <RollL>
        <RollT>4+</RollT>
          <RollD>你在泥濘中發現了某樣東西。抽取１張道具卡。</RollD>
        <RollT>0-3</RollT>
          <RollD>園丁再次出現，並用鏟子用力揮向你的臉！你的右方的玩家代替園丁，對你的進行力量４的攻擊。</RollD>
      </RollL>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="Hanged Men">
      <template slot="zh-title">上吊之人</template>
      <template slot="story">
        一陣寒風吹過房間，三名男人<br />被破爛麻繩吊掛在天花板上。<br />他們靜靜地擺動者，<br />用冰冷、死亡的眼神注視著你，<br />接著逐漸化為塵土，<br />令你感到窒息⋯
      </template>
      <Roll0>請立即對所有屬性進行檢定：</Roll0>
      <RollL>
        <RollT>2+</RollT>
          <RollD>該屬性不受影響。</RollD>
        <RollT>0-3</RollT>
          <RollD>失去１級該屬性。</RollD>
      </RollL>
      <p>若所有屬性皆通過檢定，獲得１級任意屬性。</p>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="Hideous Shriek">
      <template slot="zh-title">駭人驚叫</template>
      <template slot="story">
        一開始聽起來像耳語，<br />但最後卻變成了撕裂靈魂的驚叫⋯
      </template>
      <Roll0>請所有探險者立即進行神志檢定：</Roll0>
      <RollL>
        <RollT>4+</RollT>
          <RollD>你抵禦了這聲響。</RollD>
        <RollT>1-3</RollT>
          <RollD>受到１顆骰的精神傷害。</RollD>
        <RollT>0</RollT>
          <RollD>受到２顆骰的精神傷害。</RollD>
      </RollL>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="Image in the Mirror">
      <template slot="zh-title">鏡中影像</template>
      <template slot="story">
        這房間中，有一面古老的鏡子，<br />你疑惑地看著鏡中自己的倒影，<br />發現他不但自行動了起來，<br />還帶著一臉恐懼。<br />你瞭解到這是不同時空中的自己，<br />而他需要幫助。於是你在鏡面寫下
        <div class="font-writing my-2">這 會 有 用 的</div>
        並透過鏡子遞給他一件物品⋯
      </template>
      <p>若你手上沒有道具卡，則由下一位持有道具卡的玩家觸發此效果。</p>
      <p>選擇１張你所擁有的道具卡，洗入道具牌庫中。獲得１級知識。</p>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="rorriM eht ni egamI">
      <template slot="zh-title"><span style="display: inline-block; transform: scaleX(-1);">鏡中影像</span></template>
      <template slot="en-title"><span style="display: inline-block; transform: scaleX(-1);">Image in the Mirror</span></template>
      <template slot="story">
        這房間中，有一面古老的鏡子，<br />你驚恐地看著鏡中自己的倒影，<br />發現他不但自行動了起來，<br />還帶著一臉疑惑。<br />你瞭解到這是不同時空中的自己，<br />而他會幫助你。倒影在鏡面寫下
        <div class="font-writing my-2" style="transform: scaleX(-1);">這 會 有 用 的</div>
        並透過鏡子遞給你一件物品⋯
      </template>
      <p>抽取１張道具卡。</p>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="It is Meant to Be">
      <template slot="zh-title">命中註定</template>
      <template slot="story">
        你跌坐在地上，<br />未來的影像閃過你的腦海⋯
      </template>
      <Roll0>請選擇一項事件發生：</Roll0>
      <RollL>
        <RollT>•</RollT>
          <RollD>窺視道具、事件、或預兆牌庫的前三張牌，依任意順序放回去，但不得說出看到的內容。</RollD>
        <RollT>•</RollT>
          <RollD>擲４顆骰子並記錄結果。在未來任何擲骰機會，可直接使用這個結果，但不得超過該擲骰機會的最大可能值（僅限一次）。</RollD>
      </RollL>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="Jonah’s Turn">
      <template slot="zh-title">約拿的回合</template>
      <template slot="story">
        兩個小男孩在玩陀螺。<br />
        男孩：「約拿，你也想玩呀？」<br />
        約拿：「不，這只有我可以玩！」<br />
        語畢，約拿抓起陀螺，猛力砸向男孩的臉。影像逐漸模糊，依然可看見小男孩倒在血泊中，而約拿卻不停地砸向男孩的臉⋯
      </template>
      <p>持有<Item name="Puzzle Box" />的探險者，必須立即將它丟棄，並抽取１張道具卡。</p>
      <p>若此事發生，你獲得１級神志，否則你失去１級神志。</p>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="Lights Out">
      <template slot="zh-title">燈熄了</template>
      <template slot="story">
        你的手電筒忽然熄滅。<br />別擔心，總會有人帶著電池的⋯
      </template>
      <p>保留此卡，往後的回合你的行動步數降至１格。</p>
      <p>直到你回合結束時，有其他探險者與你處在同一房間之中，棄掉卡片並恢復正常移動。</p>
      <p>若你持有<Item name="Candle" />，或在<Room name="Furnace Room" />結束回合，亦可棄掉卡片。</p>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="Locked Safe">
      <template slot="zh-title">上鎖的保險箱</template>
      <template slot="story">
        在肖像畫後方的牆上，<br />你發現了一個隱藏的保險箱。<br />當然，它肯定有某種陷阱⋯
      </template>
      <p>放置一枚<Token name="Safe" />在此房。</p>
      <Roll0>每回合一次，任何探險者皆可進行知識檢定嘗試打開保險箱：</Roll0>
      <RollL>
        <RollT>5+</RollT>
          <RollD>你成功打開了保險箱，抽２張道具卡，並移除標記。</RollD>
        <RollT>2-4</RollT>
          <RollD>受到１顆骰的物理傷害。</RollD>
        <RollT>0-1</RollT>
          <RollD>受到２顆骰的物理傷害。</RollD>
      </RollL>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="Mists From the Walls">
      <template slot="zh-title">壁上霧靄</template>
      <template slot="story">
        霧氣從牆上湧現，<br />煙霧之中浮現了滿滿的人臉⋯<br />有些看來甚至不像人類⋯
      </template>
      <Roll0>所有位於地下的玩家，立即進行神志檢定：</Roll0>
      <RollL>
        <RollT>4+</RollT>
          <RollD>臉孔不過是光影的把戲罷了。</RollD>
        <RollT>1-3</RollT>
          <RollD>受到１顆骰的物理傷害。若你位於有事件符號的房間中，多擲１顆骰。</RollD>
        <RollT>0</RollT>
          <RollD>受到１顆骰的物理傷害。若你位於有事件符號的房間中，多擲２顆骰。</RollD>
      </RollL>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="Mystic Slide">
      <template slot="zh-title">神秘滑道</template>
      <template slot="story">
        你腳下的地板，忽然滑落並鬆開⋯
      </template>
      <p>若你位於地下，則由下一位不在地下玩家觸發此效果。</p>
      <p>放置一枚<Token name="Slide" />在此房。</p>
      <Roll0>請立即進行力量檢定嘗試控制滑道：</Roll0>
      <RollL>
        <RollT>5+</RollT>
          <RollD>你成功控制住滑道。移至低一樓層的任意一間房間中。</RollD>
        <RollT>0-4</RollT>
          <RollD>你失控了！抽取一張地下的房間板塊（若已無未探索的地下房間，則任選一間），跌落至該處，並受到１顆骰的物理傷害。若這是你不是的回合，則無須為新房間抽取事件／道具／預兆卡。</RollD>
      </RollL>
      <p>此後，任何探險者皆可透過檢定嘗試使用滑道，而不須花費行動步數。</p>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="Night View">
      <template slot="zh-title">暗夜景象</template>
      <template slot="story">
        一對幽魂情侶掠過你的面前，<br />身穿結婚禮服無聲地漫步著⋯
      </template>
      <Roll0>請立即進行知識檢定：</Roll0>
      <RollL>
        <RollT>5+</RollT>
          <RollD>你瞭解他們曾經居住於此，你呼喚他們的名字，他們轉身向你走來，輕聲告訴你在這屋子裡隱藏的黑暗秘密。獲得１級知識。</RollD>
        <RollT>0-4</RollT>
          <RollD>你恐懼地退，不敢直視。</RollD>
      </RollL>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="Phone Call">
      <template slot="zh-title">鈴鈴鈴⋯</template>
      <template slot="story">
        房內的電話忽然響起，<br />你不自覺地接起這通電話⋯
      </template>
      <Roll0>請立即擲２顆骰子，一名和藹的奶奶對你說：</Roll0>
      <RollL>
        <RollT>4</RollT>
          <RollD>『茶點和蛋糕！茶點和蛋糕！你永遠是我的小可愛！』<br />獲得１級神志。</RollD>
        <RollT>3</RollT>
          <RollD>『我一直都在你的身邊呀！小可愛，看著⋯』<br />獲得１級知識。</RollD>
        <RollT>1-2</RollT>
          <RollD>『我在這，小可愛！給我一個吻吧！』<br />受到１顆骰的精神傷害。</RollD>
        <RollT>0</RollT>
          <RollD>『小壞蛋必須受到處罰！』<br />受到２顆骰的物理傷害。</RollD>
      </RollL>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="Possession">
      <template slot="zh-title">著魔</template>
      <template slot="story">
        牆上分裂出數道黑影，<br />你一時受到震驚而無法動作。<br />黑影卻仍包圍著，<br />一股惡寒從你心裡冷出來⋯
      </template>
      <Roll0>請立即選擇任一種屬性進行檢定：</Roll0>
      <RollL>
        <RollT>4+</RollT>
          <RollD>你成功抵禦了黑影的侵蝕，獲得１級該屬性。</RollD>
        <RollT>0-3</RollT>
          <RollD>黑影吸取你的能量，該屬性被迫降至最低數值。如果該屬性已經是最低數值，則任選另一屬性降至最低。</RollD>
      </RollL>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="Revolving Wall">
      <template slot="zh-title">旋轉牆</template>
      <template slot="story">
        牆面旋轉至另一個地方⋯
      </template>
      <p>選定該房一面沒有門的牆壁，放置一枚<Token name="Wall Switch" />在該牆壁上，並立即前往牆後的房間（若牆後無房間則為它抽１間）。</p>
      <Roll0>開關雙面可用，此後每回合一次，任何探險者皆可進行知識檢定嘗試尋找旋轉牆的機關：</Roll0>
      <RollL>
        <RollT>3+</RollT>
          <RollD>你發現了旋轉牆的機關。移動至牆後房間，而不須花費行動步數。</RollD>
        <RollT>0-2</RollT>
          <RollD>你沒有辦法理解機關的奧妙。</RollD>
      </RollL>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="Rotten">
      <template slot="zh-title">腐敗</template>
      <template slot="story">
        這坊間的味道簡直糟透了！<br />聞起來像死亡，<br />有如屠宰場的鮮血⋯
      </template>
      <Roll0>請立即進行神志檢定：</Roll0>
      <RollL>
        <RollT>5+</RollT>
          <RollD>不過是惱人的氣味罷了。獲得１級神志。</RollD>
        <RollT>2-4</RollT>
          <RollD>失去１級力量。</RollD>
        <RollT>1</RollT>
          <RollD>失去１級力量和１級速度。</RollD>
        <RollT>0</RollT>
          <RollD>你不停地作嘔。失去１級全屬性。</RollD>
      </RollL>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="Secret Passage">
      <template slot="zh-title">秘密通道</template>
      <template slot="story">
        牆壁的一部分滑了開來，<br />一道發霉的通道正在等著你⋯
      </template>
      <p>放置一枚<Token name="Secret Passage" />在此房。</p>
      <Roll0>請立即擲３顆骰子，並放置另一枚標記於：</Roll0>
      <RollL>
        <RollT>6</RollT>
          <RollD>任意一間房間中。</RollD>
        <RollT>4-5</RollT>
          <RollD>任意一間樓上房間中。</RollD>
        <RollT>2-3</RollT>
          <RollD>任意一間地面房間中。</RollD>
        <RollT>0-1</RollT>
          <RollD>任意一間地下房間中。</RollD>
      </RollL>
      <p>你現在就可以使用祕密通道，就算你已耗盡行動步數亦可。</p>
      <p>此後，任何探險者皆可以使用通道，並花費１點行動步數。</p>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="Secret Stairs">
      <template slot="zh-title">秘密階梯</template>
      <template slot="story">
        一道毛骨悚然的聲響環繞著你，<br />你發現了一個秘密階梯⋯
      </template>
      <p>放置一枚<Token name="Secret Stairs" />在此房，並放置另一枚標記於另一樓層的任意一間房間中。</p>
      <p>你現在就可以使用祕密階梯，就算你已耗盡行動步數亦可。若你選擇現在使用階梯，到達新房間時，必須再抽取１張事件卡。</p>
      <p>此後，任何探險者皆可以使用通道，並花費１點行動步數。</p>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="Shrieking Wind">
      <template slot="zh-title">尖聲狂風</template>
      <template slot="story">
        風勢持續地增強，<br />緩慢地漸強成刺耳的咆嘯聲⋯
      </template>
      <Roll0>請所有位於<Room name="Gardens" />、<Room name="Graveyard" />、<Room name="Patio" />、<Room name="Tower" />、<Room name="Balcony" />、以及任何窗口向外房間的探險者，立即進行力量檢定：</Roll0>
      <RollL>
        <RollT>5+</RollT>
          <RollD>穩住腳步</RollD>
        <RollT>3-4</RollT>
          <RollD>強風將你擊倒。受到１顆骰的物理傷害。</RollD>
        <RollT>1-2</RollT>
          <RollD>寒風注入你的心底。受到１顆骰的精神傷害。</RollD>
        <RollT>0</RollT>
          <RollD>狂風狠狠地擊垮了你。受到１顆骰的物理傷害，同時選擇１件自己的物品，放到<Room name="Entrance Hall" />。</RollD>
      </RollL>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="Silence">
      <template slot="zh-title">寂靜</template>
      <template slot="story">
        在地底下，任何事物都變得沈默，<br />彷彿連呼吸聲都消失了⋯
      </template>
      <Roll0>請所有位於地下的探險者，立即進行神志檢定：</Roll0>
      <RollL>
        <RollT>4+</RollT>
          <RollD>你冷靜地等待聽覺恢復。</RollD>
        <RollT>1-3</RollT>
          <RollD>你發出一陣無聲的尖叫。受到１顆骰的精神傷害。</RollD>
        <RollT>0</RollT>
          <RollD>你嚇壞了！受到２顆骰的精神傷害。</RollD>
      </RollL>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="Skeletons">
      <template slot="zh-title">骨骸</template>
      <template slot="story">
        即使成了骨骸，<br />母親與孩子仍然緊緊擁抱著⋯
      </template>
      <p>放置一枚<Token name="Skeletons" />在此房。</p>
      <Roll0>每回合一次，任何探險者皆可進行神志檢定嘗試挖掘骨骸：</Roll0>
      <RollL>
        <RollT>5+</RollT>
          <RollD>抽取一張道具卡，並移除標記。</RollD>
        <RollT>0-4</RollT>
          <RollD>你在附近挖掘，卻一無所獲。受到１顆骰的精神傷害。</RollD>
      </RollL>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="Smoke">
      <template slot="zh-title">煙霧</template>
      <template slot="story">
        煙霧在你四周翻騰，<br />你一邊咳嗽、一邊擦著眼淚⋯
      </template>
      <p>放置一枚<Token name="Smoke" />在此房。</p>
      <p>煙霧會阻礙視線。</p>
      <p>此後在此房間進行的任何檢定，皆少擲２顆骰子（至少１顆）。</p>
      <p>戰鬥不算檢定。</p>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="Something Hidden">
      <template slot="zh-title">隱藏著什麼⋯</template>
      <template slot="story">
        這房間似乎有些古怪，<br />但到底會是什麼呢？<br />這問題持續困擾著你⋯
      </template>
      <Roll0>請立即進行知識檢定以找出原因：</Roll0>
      <RollL>
        <RollT>4+</RollT>
          <RollD>牆上的一部分滑了開來，你發現了一個壁櫥。抽取１張道具卡。</RollD>
        <RollT>0-3</RollT>
          <RollD>仍然找不出原因，使你發狂！失去１級神志。</RollD>
      </RollL>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="Something Slimy">
      <template slot="zh-title">黏滑之物</template>
      <template slot="story">
        在你腳踝上的是什麼東西？<br />是一隻蟲？是誰的觸角？<br />還是一隻死人的手⋯
      </template>
      <Roll0>請立即進行速度檢定：</Roll0>
      <RollL>
        <RollT>4+</RollT>
          <RollD>你很快地掙脫。獲得１級速度。</RollD>
        <RollT>1-3</RollT>
          <RollD>失去１級力量。</RollD>
        <RollT>0</RollT>
          <RollD>失去１級力量和１級速度。</RollD>
      </RollL>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="Spider">
      <template slot="zh-title">蜘蛛</template>
      <template slot="story">
        拳頭般大小的蜘蛛，<br />突然落在你的肩膀上，<br />爬入你的頭髮⋯
      </template>
      <Roll0>請立即進行速度檢定嘗試撥開他，或是進行神志檢定嘗試保持冷靜：</Roll0>
      <RollL>
        <RollT>4+</RollT>
          <RollD>牠離開了。獲得１級該屬性。</RollD>
        <RollT>1-3</RollT>
          <RollD>牠咬了你！受到１顆骰的物理傷害。</RollD>
        <RollT>0</RollT>
          <RollD>牠大口地咬去你一塊肉！受到２顆骰的物理傷害。</RollD>
      </RollL>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="The Beckoning">
      <template slot="zh-title">呼喚</template>
      <template slot="story">
        離開！我必須離開！飛向自由吧！
      </template>
      <Roll0>請所有位於<Room name="Gardens" />、<Room name="Graveyard" />、<Room name="Tower" />、<Room name="Balcony" />、以及任何窗口向外的房間的探險者，立即進行神志檢定：</Roll0>
      <RollL>
        <RollT>3+</RollT>
          <RollD>你從邊緣退開。</RollD>
        <RollT>0-2</RollT>
          <RollD>你縱身跳進了<Room name="Patio" />，將人物移到此處，並受到１顆骰的物理傷害。（若<Room name="Patio" />尚未探索，將其找出並放進屋內。）</RollD>
      </RollL>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="The Lost One">
      <template slot="zh-title">迷失之魂</template>
      <template slot="story">
        一名身穿美國內戰晚禮服的女子，<br />正揮手招喚著你，<br />不久後，你便陷入了催眠中⋯
      </template>
      <Roll0>請立即進行知識檢定：</Roll0>
      <RollL>
        <RollT>5+</RollT>
          <RollD>再次清醒過來。獲得１級知識。</RollD>
        <RollT>0-4</RollT>
          <RollD>
            <Roll0>另外擲３顆骰，幽魂引導你至：</Roll0>
            <RollL style="margin-left: -2rem">
              <RollT>6</RollT>
                <RollD><Room name="Entrance Hall" />。</RollD>
              <RollT>4-5</RollT>
                <RollD><Room name="Upper Landing" />。</RollD>
              <RollT>2-3</RollT>
                <RollD>抽取一張樓上的房間板塊。</RollD>
              <RollT>0-1</RollT>
                <RollD>抽取一張地下的房間板塊。</RollD>
            </RollL>
            <p>若已無未探索房間板塊，則直接前往<Room name="Entrance Hall" />。</p>
          </RollD>
      </RollL>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="The Voice">
      <template slot="zh-title">人聲</template>
      <template slot="story">
        「我在地底下，被埋在地底下⋯」<br />微弱的聲音只說出這樣一句，<br />便不再發聲⋯
      </template>
      <Roll0>請立即進行知識檢定：</Roll0>
      <RollL>
        <RollT>4+</RollT>
          <RollD>你在地板下發現了什麼。抽取１張道具卡。</RollD>
        <RollT>0-3</RollT>
          <RollD>你依循著聲音挖開地板，卻一無所獲。</RollD>
      </RollL>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="The Walls">
      <template slot="zh-title">牆</template>
      <template slot="story">
        在這間溫暖的房間中，<br />活生生的牆壁有如心跳得正動，<br />你的心臟也跟著這屋子的節奏拍打。忽然間，你被吸入牆壁之中⋯
      </template>
      <p>請立即抽取一張新的房間板塊，並移到此處。</p>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="Webs">
      <template slot="zh-title">蜘蛛網</template>
      <template slot="story">
        一如往常，你伸手把蜘蛛網撥開，<br />但這次沒能成功，你被黏住了⋯
      </template>
      <Roll0>請立即進行力量檢定：</Roll0>
      <RollL>
        <RollT>4+</RollT>
          <RollD>你掙脫了，獲得１級力量。</RollD>
        <RollT>0-3</RollT>
          <RollD>你被黏住了。</RollD>
      </RollL>

      <p>若被黏住，保留此卡，並無法再進行任何行動或使用物品，直到掙脫為止。</p>
      <p>此後每回合一次，你皆可進行力量檢定達 4+ 嘗試掙脫。其他探險者也能用此方法幫你掙脫。檢定失敗的探險者，回合立即結束。</p>
      <p>若檢定三次失敗，你自動掙脫並丟棄此卡，從下回合開始正常行動。</p>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="What the…?">
      <template slot="zh-title">咦？</template>
      <template slot="story">
        當你回頭轉向經過的房間時，<br />卻什麼也沒看到，<br />只留下一層迷霧⋯
      </template>
      <p>請將你身處的房間板塊移至同一樓層中，任一尚未探索的門後，房間上的所有標記皆一起移動。</p>
    </EventCard>

    <EventCard class="m-2" series="BHH" name="WHOOPS!">
      <template slot="zh-title">哎呀！</template>
      <template slot="story">
        你發現腳下似乎有什麼東西，<br />正要躲開時，卻被牠狠狠擊倒，<br />只聽見一陣咯咯笑聲離你遠去⋯
      </template>
      <p>請將你所有的道具卡（不包含預兆卡）覆蓋於桌面，由你右邊的玩家隨機選擇丟棄其中一張。</p>
    </EventCard>

  </b-card-text>
</template>

<script>
import EventCard from '@/components/bhh/card/event.vue';

export default {
  name: 'EventsBHH',
  components: {
    EventCard,
  },
};
</script>
