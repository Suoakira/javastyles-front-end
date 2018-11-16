// front images are plain
// temporary manual seeding - can't access styles.js from index.js?
const tops = [{
        frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/e5/c3/e5c378a6259112704c88407f937ba7ac7d4f207d.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]",
        backUrl: "https://lp2.hm.com/hmgoepprod?set=source[/2e/19/2e199b0065acf22fb4455fa3757aad23b4c9b604.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]"
    },
    {
        frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/d0/f5/d0f589be3bcc008898712fa43d73bcae8b1b1a33.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]",
        backUrl: "https://lp2.hm.com/hmgoepprod?set=source[/73/3f/733f60a20a07fae777c94c9bef13791302a02a22.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]"
    },
    {
        frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/be/54/be540c69153e68abd68c14ba3011565619000036.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]",
        backUrl: "https://lp2.hm.com/hmgoepprod?set=source[/ca/f3/caf336235b5bcbc06520061a7d1ce3336a5d9624.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]"

    },
    {
        frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/a9/f6/a9f6084acec38ce13a3ba7d00ac3a19dcc58c7fe.jpg],origin[dam],category[men_tshirtstanks_longsleeve],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]",
        backUrl: "https://lp2.hm.com/hmgoepprod?set=source[/76/14/761485979a4bff8ccc4d47b646b06edb25e6beb5.jpg],origin[dam],category[men_tshirtstanks_longsleeve],type[LOOKBOOK],res[s],hmver[1]&call=url[file:/product/main]"
    },
    {
        frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/66/a2/66a28830dd5347a6094e9e9931fd0ed1b4f7812b.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]",
        backUrl: "https://lp2.hm.com/hmgoepprod?set=source[/7e/73/7e73defef42461433153418c6bf3a7d4c152ad2b.jpg],origin[dam],category[ladies_tops_shortsleeve],type[LOOKBOOK],res[m],res[s],hmver[1]&call=url[file:/product/main]"
    },
    {
        frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/51/c7/51c77b4fda81bf4f1e42a1fca7120fca0bae13fa.jpg],origin[dam],category[ladies_tops_longsleeve],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]",
        backUrl: "https://lp2.hm.com/hmgoepprod?set=source[/90/72/9072fe688f16bd554915cff95fe653ba648663fe.jpg],origin[dam],category[ladies_tops_longsleeve],type[LOOKBOOK],res[s],hmver[1]&call=url[file:/product/main]"
    },
    {
        frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/52/4c/524c19d0b5f2b93bc7eb3e587884713419d4585c.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]",
        backUrl: "https://lp2.hm.com/hmgoepprod?set=source[/22/f4/22f4dceb5d99dbae34178784904d3687e3f94e51.jpg],origin[dam],category[ladies_tops_vests],type[LOOKBOOK],res[s],hmver[1]&call=url[file:/product/main]"
    },
    {
        frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/79/a0/79a0f93f4ff936c83c25844a0f7541649ff78bd7.jpg],origin[dam],category[ladies_tops_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]",
        backUrl: "https://lp2.hm.com/hmgoepprod?set=source[/60/4f/604fb64ad497c853c2791025796909a90ee24d81.jpg],origin[dam],category[ladies_tops_shortsleeve],type[LOOKBOOK],res[m],res[s],hmver[1]&call=url[file:/product/main]"
    },
    {
        frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/65/be/65be44af70d7d102ae4197582f5ecf3b58130fe9.jpg],origin[dam],category[ladies_lingerie_bras_softwireless],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]",
        backUrl: "https://lp2.hm.com/hmgoepprod?set=source[/78/34/78343ed27f8701c18abe21dd2bc9c54b6b9a4476.jpg],origin[dam],category[ladies_lingerie_bras_softwireless],type[LOOKBOOK],res[s],hmver[1]&call=url[file:/product/main]"
    },
    {
        frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/a5/a9/a5a9bff42ab9c41ae09cd2a68b97dabc23d7837d.jpg],origin[dam],category[ladies_lingerie_bras_pushup],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]",
        backUrl: "https://lp2.hm.com/hmgoepprod?set=source[/21/ee/21ee4ad562f7608fc0923bd28a204509435dffce.jpg],origin[dam],category[ladies_lingerie_bras_pushup],type[LOOKBOOK],res[s],hmver[1]&call=url[file:/product/main]"
    },
    {
        frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/13/2d/132d1d9abb23630c401f9e0727bd38af66b1f0ad.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]",
        backUrl: "https://lp2.hm.com/hmgoepprod?set=source[/37/ab/37abcaa5351c7cf2426ead19de8351f562b72ec5.jpg],origin[dam],category[ladies_lingerie_bras_softwireless],type[LOOKBOOK],res[m],res[s],hmver[1]&call=url[file:/product/main]"
    },
    {
        frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/4f/69/4f69d6b900df3aa086e8a93c87e41b417bca205f.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]",
        backUrl: "https://lp2.hm.com/hmgoepprod?set=source[/3f/b4/3fb4f6d155ce50d9bccba2e441070717288cd9a5.jpg],origin[dam],category[],type[LOOKBOOK],res[s],hmver[1]&call=url[file:/product/main]"
    },
    {
        frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/22/f1/22f1606e0eba40e11e08d192e3ec975947331f07.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]",
        backUrl: "https://lp2.hm.com/hmgoepprod?set=source[/07/5f/075f6f59a4d0a695a91860195f00f34002bab7bc.jpg],origin[dam],category[men_blazerssuits_blazers],type[LOOKBOOK],res[s],hmver[1]&call=url[file:/product/main]"
    },
    {
        frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/cb/b2/cbb2dd137c0f3ad94adf0b76fe95fa8d522fc76c.jpg],origin[dam],category[men_blazerssuits_blazers],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]",
        backUrl: "https://lp2.hm.com/hmgoepprod?set=source[/7b/bf/7bbf777384324108abde0c325d24dd3d184489cb.jpg],origin[dam],category[men_blazerssuits_blazers],type[LOOKBOOK],res[s],hmver[1]&call=url[file:/product/main]"
    },
    {
        frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/fb/93/fb93d27aa51d0f4d1f9ba6732890a8fe839b688c.jpg],origin[dam],category[men_jacketscoats_jackets],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]",
        backUrl: "https://lp2.hm.com/hmgoepprod?set=source[/ed/56/ed56b3b46896c43bec2fca1a2700911bfb2ce5a3.jpg],origin[dam],category[men_jacketscoats_jackets],type[LOOKBOOK],res[s],hmver[1]&call=url[file:/product/main]"
    },
    {
        frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/4b/f6/4bf6e11a0063fe8c53a52b87f3ac6a6ef7a7b147.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]",
        backUrl: "https://lp2.hm.com/hmgoepprod?set=source[/05/d0/05d0dc86ccdb652db6ea816427eb70886a9f46ad.jpg],origin[dam],category[],type[LOOKBOOK],res[s],hmver[1]&call=url[file:/product/main]"
    },
    {
        frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/d1/8d/d18d4504424195c9d99fb6d7bb456373a837cc26.jpg],origin[dam],category[men_jacketscoats_jackets],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]",
        backUrl: "https://lp2.hm.com/hmgoepprod?set=source[/d1/8d/d18d4504424195c9d99fb6d7bb456373a837cc26.jpg],origin[dam],category[men_jacketscoats_jackets],type[LOOKBOOK],res[m],res[s],hmver[1]&call=url[file:/product/main]"
    },
    {
        frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/2c/9f/2c9f361c944e69b0d2a2983d64742d8410fb7cd5.jpg],origin[dam],category[men_hoodiessweatshirts],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]",
        backUrl: "https://lp2.hm.com/hmgoepprod?set=source[/2c/9f/2c9f361c944e69b0d2a2983d64742d8410fb7cd5.jpg],origin[dam],category[men_hoodiessweatshirts],type[LOOKBOOK],res[s],hmver[1]&call=url[file:/product/main]"
    },
]

const bottoms = [{
        frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/e5/bb/e5bb27d5199ad284ef0f608bd9aa4d9b4b7e3dd7.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]",
        backUrl: "https://lp2.hm.com/hmgoepprod?set=source[/fd/b8/fdb85b2f582c41e220910b482e1009828f5e42f4.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]"

    },
    {
        frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/50/8e/508e6b4cfde3fda6c580c4f0a89149c728fade98.jpg],origin[dam],category[men_jeans_slim],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]",
        backUrl: "https://lp2.hm.com/hmgoepprod?set=source[/85/c4/85c415ccb4192148a5e7998a52c43520d6b52d8d.jpg],origin[dam],category[men_trousers_trousers_skinny_all],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]"

    },
    {
        frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/3c/b4/3cb40883580210669811aaa3f1fc92050f09743f.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]",
        backUrl: "https://lp2.hm.com/hmgoepprod%3Fset=source[/da/69/da69457d71d94f45b0094c0c0cedd8749ece0f08.jpg],origin[dam],category[men_jeans_skinny],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]"

    },
    {
        frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/b1/9a/b19a15ff7acb512d1b9fb93521ee980470135d6c.jpg],origin[dam],category[ladies_lingerie_briefsknickers_brazilian],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]",
        backUrl: "https://lp2.hm.com/hmgoepprod?set=source[/68/0c/680c3782d7b0e7ad36d8c6ca731a1e9c6c0d952a.jpg],origin[dam],category[ladies_lingerie_briefsknickers_brazilian],type[LOOKBOOK],res[m],res[s],hmver[1]&call=url[file:/product/main]"
    },
    {
        frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/50/70/507086f4815c69551af2714f7a32a42d92f82915.jpg],origin[dam],category[ImportedProduct],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]",
        backUrl: "https://lp2.hm.com/hmgoepprod?set=source[/20/53/20532c31520b888fb6915f4b2330c80b7e955825.jpg],origin[dam],category[ladies_lingerie_briefsknickers_brazilian],type[LOOKBOOK],res[s],hmver[1]&call=url[file:/product/main]"
    },
    {
        frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/f4/99/f4994d22f30081d30dfde9d019f597fc2307b9f3.jpg],origin[dam],category[ladies_trousers_slim],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]",
        backUrl: "https://lp2.hm.com/hmgoepprod?set=source[/fb/b2/fbb2eff961d2f1f12740431cdce21a6090381601.jpg],origin[dam],category[ladies_trousers_slim],type[LOOKBOOK],res[m],res[s],hmver[1]&call=url[file:/product/main]"
    },
    {
        frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/9c/70/9c701f2953b1616933e83257bfcd60e5c399c4bf.jpg],origin[dam],category[ladies_trousers_leggings],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]",
        backUrl: "https://lp2.hm.com/hmgoepprod?set=source[/cf/ac/cfac8842cde3cd6ab8845897dae0cb9c53ba81e1.jpg],origin[dam],category[ladies_trousers_leggings],type[LOOKBOOK],res[m],res[s],hmver[1]&call=url[file:/product/main]"
    },
    {
        frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/95/a7/95a7cfeaaeebe2f218e610998aa5f799dafe36ca.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]",
        backUrl: "https://lp2.hm.com/hmgoepprod?set=source[/3d/73/3d73cc12b70f94ac2dfd890c6dc3e4d8a8293e21.jpg],origin[dam],category[],type[LOOKBOOK],res[s],hmver[1]&call=url[file:/product/main]"
    },
    {
        frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/15/3d/153d262b760e432b4cc556fb0b13638475434438.jpg],origin[dam],category[ladies_trousers_slim],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]",
        backUrl: "https://lp2.hm.com/hmgoepprod?set=source[/b8/c2/b8c2fdbb7ce4a1b6b01627c3781a1b6499f460a1.jpg],origin[dam],category[ladies_trousers_slim],type[LOOKBOOK],res[s],hmver[1]&call=url[file:/product/main]"
    },
    {
        frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/25/93/2593729cccc2cd4e586ec23a37a545cc86431931.jpg],origin[dam],category[ladies_trousers_leggings],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]",
        backUrl: "https://lp2.hm.com/hmgoepprod?set=source[/1e/9f/1e9fcb9a65c132a63906649a7f53d12b42c24ad3.jpg],origin[dam],category[ladies_trousers_leggings],type[LOOKBOOK],res[s],hmver[1]&call=url[file:/product/main]"
    },
    {
        frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/33/0e/330ee1e9895534b85f3ba12bfda4a7c3cf37694e.jpg],origin[dam],category[ladies_jeans_skinny],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
        backUrl: "https://lp2.hm.com/hmgoepprod?set=source[/62/d4/62d4c053bcf011b463b94f995343ec873ced0832.jpg],origin[dam],category[ladies_jeans_skinny],type[LOOKBOOK],res[m],res[s],hmver[1]&call=url[file:/product/main]"
    },
    {
        frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/00/e5/00e5c686771c58d346bf301a0a18e60c829f8c08.jpg],origin[dam],category[ladies_trousers_flare],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]",
        backUrl: "https://lp2.hm.com/hmgoepprod?set=source[/42/bb/42bbd7198d4f22f140f1ea40d91a0ad0afc951c7.jpg],origin[dam],category[ladies_trousers_flare],type[LOOKBOOK],res[s],hmver[1]&call=url[file:/product/main]"
    },
    {
        frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/0b/57/0b5735cefc4999f125461cdab148d11845cf3c80.jpg],origin[dam],category[men_underwearloungewear_pyjamas],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]",
        backUrl: "https://lp2.hm.com/hmgoepprod?set=source[/0b/57/0b5735cefc4999f125461cdab148d11845cf3c80.jpg],origin[dam],category[men_underwearloungewear_pyjamas],type[LOOKBOOK],res[s],hmver[1]&call=url[file:/product/main]"
    },
    {
        frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/69/d6/69d63165ecf45bfcc69e29040b95fc667a587084.jpg],origin[dam],category[men_sport_bottoms],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]",
        backUrl: "https: //lp2.hm.com/hmgoepprod?set=source[/54/40/5440d09a0afbb7fb578342cc31c8dfc94c92b57b.jpg],origin[dam],category[men_sport_bottoms],type[LOOKBOOK],res[s],hmver[1]&call=url[file:/product/main]"
    },
    {
        frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/8d/0b/8d0b452051668110b3a7edbe32fdbf801c750cf5.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]",
        backUrl: "https://lp2.hm.com/hmgoepprod?set=source[/96/2a/962a5c8a0c61971bcfb5dab38fd36a0a91a6e8a0.jpg],origin[dam],category[],type[LOOKBOOK],res[s],hmver[1]&call=url[file:/product/main]"
    },
    {
        frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/0b/8e/0b8e33e58cd0aeb5cc323538e87c865c54ba6ef9.jpg],origin[dam],category[men_jeans_skinny],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]",
        backUrl: "http://lp2.hm.com/hmgoepprod?set=source[/91/5b/915b53adea0aeced803fcd887373e34367a22380.jpg],origin[dam],category[men_jeans_skinny],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]"

    },
    {
        frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/ef/13/ef132df3a37ddde917527d8aac694287b6e9472b.jpg],origin[dam],category[men_jeans_slim],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]",
        backUrl: "http://lp2.hm.com/hmgoepprod?set=source[/7a/f7/7af73a8ffed9d63e369ee57ee723ad2ef9dc48ca.jpg],origin[dam],category[men_jeans_slim],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]"
    },
    {
        frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/02/ed/02ed510b036feef6652f3720812fc1c84f478d29.jpg],origin[dam],category[men_trousers_trousers_skinny_all],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]",
        backUrl: "https://lp2.hm.com/hmgoepprod?set=source[/ef/7e/ef7ec080b7cf5b172da329af33d3118b8bbb6d1c.jpg],origin[dam],category[men_trousers_trousers_skinny_all],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]"

    },
    {
        frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/bc/aa/bcaae9317e4f13ec58b61be2a2c9b2a72ae8a13f.jpg],origin[dam],category[men_trousers],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]",
        backUrl: "https://lp2.hm.com/hmgoepprod%3Fset=source[/4f/61/4f61d265aa2f110bea14253ee948f74a43b87498.jpg],origin[dam],category[men_trousers],type[LOOKBOOK],res[z],hmver[2]&call=url[file:/product/main]"
    }, 
    {
        frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/ee/5d/ee5dc8c5ee12755ae620ae46421a82617c1c7d65.jpg],origin[dam],category[men_shorts],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]",
        backUrl: "https://lp2.hm.com/hmgoepprod%3Fset=source[/db/f3/dbf386186a29d4ad22adcfb9c4aabcdd831313a9.jpg],origin[dam],category[men_shorts],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]"
    }
    
]

const shoes = [{
        frontUrl: "https://runnerspoint.scene7.com/is/image/rpe/314625664504?$medium$"
        // backUrl: "placeholder"
    },
    {
        frontUrl: "https://runnerspoint.scene7.com/is/image/rpe/314625649604?$medium$"
        // backUrl: "placeholder"
    },
    {
        frontUrl: "https://runnerspoint.scene7.com/is/image/rpe/314625688404?$medium$"
        // backUrl: "placeholder"
    },
    {
        frontUrl: "https://runnerspoint.scene7.com/is/image/rpe/56494044?$large$"
    },
    {
        frontUrl: "https://runnerspoint.scene7.com/is/image/rpe/56494709?$large$"
    },
    {
        frontUrl: "https://runnerspoint.scene7.com/is/image/rpe/56488746?$large$"
    },
    {
        frontUrl: "https://runnerspoint.scene7.com/is/image/rpe/56475746?$large$"
    },
    {
        frontUrl: "https://runnerspoint.scene7.com/is/image/rpe/56475678?$large$"
    },
    {
        frontUrl: "https://runnerspoint.scene7.com/is/image/rpe/56484915?$large$"
    },
    {
        frontUrl: "https://runnerspoint.scene7.com/is/image/rpe/56478723?$large$"
    },
    {
        frontUrl: "https://runnerspoint.scene7.com/is/image/rpe/56496727?$large$"
    },
    {
        frontUrl: "https://runnerspoint.scene7.com/is/image/rpe/56538328?$large$"
    },
    {
        frontUrl: "https://runnerspoint.scene7.com/is/image/rpe/56429114?$large$"
    },
    {
        frontUrl: "https://runnerspoint.scene7.com/is/image/rpe/56520774?$large$"
    },
    {
        frontUrl: "https://runnerspoint.scene7.com/is/image/rpe/56470628_01?id=niFQ13&wid=232&hei=232&fmt=jpg"
    },
    {
        frontUrl: "https://runnerspoint.scene7.com/is/image/rpe/56528510_02?id=sbPQn1&wid=232&hei=232&fmt=jpg"
    }, {
        frontUrl: "https://runnerspoint.scene7.com/is/image/rpe/56538328_01?id=URcRH1&wid=232&hei=232&fmt=jpg"
    }, {
        frontUrl: "https://runnerspoint.scene7.com/is/image/rpe/56537956_01?id=VlEQT0&wid=232&hei=232&fmt=jpg"
    }, {
        frontUrl: "https://runnerspoint.scene7.com/is/image/rpe/56478723_02?id=jjZQP1&wid=232&hei=232&fmt=jpg"
    }, {
        frontUrl: "https://runnerspoint.scene7.com/is/image/rpe/56475678_01?id=JSDQ32&wid=232&hei=232&fmt=jpg"
    }, {
        frontUrl: "https://runnerspoint.scene7.com/is/image/rpe/56475746?$large$"
    }, {
        frontUrl: "https://runnerspoint.scene7.com/is/image/rpe/56494129?$large$"
    }, {
        frontUrl: "https://runnerspoint.scene7.com/is/image/rpe/56536829?$large$"
    }, {
        frontUrl: "https://runnerspoint.scene7.com/is/image/rpe/56472141_01?id=WicVh3&wid=232&hei=232&fmt=jpg"
    }, {
        frontUrl: "https://runnerspoint.scene7.com/is/image/rpe/56309300?$large$"
    }, {
        frontUrl: "https://runnerspoint.scene7.com/is/image/rpe/55961028?$large$"
    },
    {
        frontUrl: "https://runnerspoint.scene7.com/is/image/rpe/56496666?$large$"
    }, {
        frontUrl: "https://runnerspoint.scene7.com/is/image/rpe/314625649604?$medium$"

    }, {
        frontUrl: "https://runnerspoint.scene7.com/is/image/rpe/56472356_01?id=dtwQ50&wid=232&hei=232&fmt=jpg"
    }, {
        frontUrl: "https://runnerspoint.scene7.com/is/image/rpe/56472356_01?id=dtwQ50&wid=232&hei=232&fmt=jpg"
    }, {
        frontUrl: "https://runnerspoint.scene7.com/is/image/rpe/55991209?$large$"
    }

        
]


const addTop = (furl, burl) => {
    tops.push({frontUrl: furl, backUrl: burl})
}

const addBottom = (furl, burl) => {
    bottoms.push({frontUrl: furl, backUrl: burl})
}

const addShoes = (url) => {
    shoes.push({frontUrl: url})
}