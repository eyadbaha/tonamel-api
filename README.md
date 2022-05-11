# tonamel-api
An API to get tonamel tournament details.

## NPM Dependencies
- puppeteer (version 2.0.0 or lower is recommended if you're hosting on an aws server)
- express
## How it works
After setting up the project on a server, the endpoint should return the Tournament's Name, Timestamp, and details in JSON format.
#### Example
Let's say our server is running at http://localhost:8080 and we want to get information about https://tonamel.com/competition/zLpm7, we'll call http://localhost:8080/zLpm7.

Response: 
`{"title":"TOONWeekly#79","date":1652504400,"details":"■はじめに■\nーーーーーーーーーーーーーーーー\nご覧いただきありがとうございます。\n参加希望の方はTwitter 「@mabo_dl」の固定ツイートにあります、\nTOON Weekly 用　discord サーバーの方へ加入お願いします\nーーーーーーーーーーーーーーーー\n※デッキ提出先はdiscord内にある「デッキ提出」のスレッドで行ってください。\n\n※デッキ提出〆切時間→当日PM13:00(JST)まで\n\n📝大会形式（Format)📝\nーーーーーーーーーーーーーーーー\n■日程(Schedule)：毎週土曜\n 14:00P.M～(JST)\n大会形式：シングルイリミ　全Round BO3\n枠:128名\n※人数が32名以下の場合中止の可能性がございます\n※人数があふれた場合、13時の時点でデッキ提出済の方を優先的に繰り上げます\n\n優勝：1000円　\n 最終エントリー64人超えで + 500円\n　　　※CCS加権付与\n　　　※「ZONe、「AUGER」はありません \n\nーーーーーーーーーーーーーーー\n\n■デッキに関して(About Deck)■\nーーーーーーーーーーーーーーーー\n①Main(20-30 Cards）で構成する。\n※サイドデッキなし\n※デッキ提出「 Googleフォーム 」提出。\n※大会開始「13時」までに提出。\n※デッキ提出遅れはキャンセル待ちの人を優先し、その後枠があればアナウンス後指定時間過ぎると「失格」。\n※デッキ提出時、デッキ名は必ず自分の名前にし、discord上「 #how-to-deck-submition 」の方法にて提出。\nーーーーーーーーーーーーーーーー\n\n■大会進行に関して■\nーーーーーーーーーーーーーーーー\n①Top4まで→対戦相手が決まり次第、順次試合を開始。\n②Top4から→足並みを揃えて試合を開始。\n※ルーム作成し、入室まで進めてください\n③対戦ルームは時間「180秒」、観戦「ON」人数「3人」「リミット」ありで作成\n④観戦IDの公開は対戦相手に了承を取れた場合のみ可。\n⑤1回戦の試合合図後、10分遅刻で失格とする。2回戦以降は随時ジャッジが判断する。\nーーーーーーーーーーーーーーーー\n\n■注意事項■\nーーーーーーーーーーーーーーーー\ndiscord内　#注意事項　へ\nーーーーーーーーーーーーーーーー\n■リミットに関して(About Deck)■\n新レギュが発表された場合は基本新レギュ反映させます\n新レギュ発表後のルーム作成は「リミット」なしで作成お願いします\n運営の方でなるべくデッキ内容の方確認致しますが\n漏れの方もございますがご了承いただければと思います\n詳しいアナウンスはdiscordをご確認ください\nーーーーーーーーーーーーーーーー\n\n■デッキに関して■\nーーーーーーーーーーーーーーーー\nご提出いただいたデッキはyoutubeなどで使用させていただきます。\nご了承の上ご参加ください\nーーーーーーーーーーーーーーーー\n\n■その他■\nーーーーーーーーーーーーーーーー\n当日は　youtube にて配信を行ないます。ご了承ください。\n"}`
