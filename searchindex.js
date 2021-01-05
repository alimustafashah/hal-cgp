Search.setIndex({docnames:["api_reference/api_reference","api_reference/cgp","api_reference/ea","api_reference/hl_api","api_reference/local_search","api_reference/nodes","auto_examples/example_caching","auto_examples/example_differential_evo_regression","auto_examples/example_evo_regression","auto_examples/example_fec_caching","auto_examples/example_hurdles","auto_examples/example_minimal","auto_examples/example_mountain_car","auto_examples/example_multi_genome","auto_examples/example_parametrized_nodes","auto_examples/example_piecewise_target_function","auto_examples/example_reorder","auto_examples/index","auto_examples/sg_execution_times","basic_usage","citation","documentation/documentation","documentation/local_search","documentation/nodes","documentation/population_individual","index","installation","references"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,sphinx:56},filenames:["api_reference/api_reference.rst","api_reference/cgp.rst","api_reference/ea.rst","api_reference/hl_api.rst","api_reference/local_search.rst","api_reference/nodes.rst","auto_examples/example_caching.rst","auto_examples/example_differential_evo_regression.rst","auto_examples/example_evo_regression.rst","auto_examples/example_fec_caching.rst","auto_examples/example_hurdles.rst","auto_examples/example_minimal.rst","auto_examples/example_mountain_car.rst","auto_examples/example_multi_genome.rst","auto_examples/example_parametrized_nodes.rst","auto_examples/example_piecewise_target_function.rst","auto_examples/example_reorder.rst","auto_examples/index.rst","auto_examples/sg_execution_times.rst","basic_usage.rst","citation.rst","documentation/documentation.rst","documentation/local_search.rst","documentation/nodes.rst","documentation/population_individual.rst","index.rst","installation.rst","references.rst"],objects:{"":{cgp:[25,0,0,"-"]},"cgp.CartesianGraph":{determine_active_regions:[1,2,1,""],pretty_str:[1,2,1,""],print_active_nodes:[1,2,1,""],to_func:[1,2,1,""],to_numpy:[1,2,1,""],to_sympy:[1,2,1,""],to_torch:[1,2,1,""]},"cgp.Genome":{clone:[1,2,1,""],determine_permissible_values:[1,2,1,""],mutate:[1,2,1,""],randomize:[1,2,1,""],reorder:[1,2,1,""],update_parameters_from_torch_class:[1,2,1,""]},"cgp.Population":{champion:[1,2,1,""],fitness_parents:[1,2,1,""],mutate:[1,2,1,""],reorder_genome:[1,2,1,""]},"cgp.ea":{MuPlusLambda:[2,1,1,""]},"cgp.ea.MuPlusLambda":{initialize_fitness_parents:[2,2,1,""],step:[2,2,1,""],update_n_objective_calls:[2,2,1,""]},"cgp.individual":{IndividualMultiGenome:[1,1,1,""],IndividualSingleGenome:[1,1,1,""]},"cgp.local_search":{gradient_based:[4,3,1,""]},"cgp.node":{Node:[5,1,1,""],OperatorNode:[5,1,1,""],register:[5,3,1,""]},"cgp.node.Node":{activate:[5,2,1,""],arity:[5,2,1,""],format_output_str:[5,2,1,""],format_output_str_numpy:[5,2,1,""],format_output_str_sympy:[5,2,1,""],format_output_str_torch:[5,2,1,""],idx:[5,2,1,""],input_nodes:[5,2,1,""],max_arity:[5,2,1,""],output:[5,2,1,""],output_str:[5,2,1,""],pretty_str:[5,2,1,""]},"cgp.node.OperatorNode":{format_output_str:[5,2,1,""],format_output_str_numpy:[5,2,1,""],format_output_str_sympy:[5,2,1,""],format_output_str_torch:[5,2,1,""],format_parameter_str:[5,2,1,""],initial_value:[5,2,1,""],parameter_str:[5,2,1,""]},"cgp.node_impl":{Add:[5,1,1,""],ConstantFloat:[5,1,1,""],Div:[5,1,1,""],IfElse:[5,1,1,""],Mul:[5,1,1,""],Parameter:[5,1,1,""],Pow:[5,1,1,""],Sub:[5,1,1,""]},"cgp.node_input_output":{InputNode:[5,1,1,""],OutputNode:[5,1,1,""]},"cgp.node_input_output.InputNode":{format_output_str:[5,2,1,""],format_output_str_numpy:[5,2,1,""],format_output_str_sympy:[5,2,1,""],format_output_str_torch:[5,2,1,""]},"cgp.node_input_output.OutputNode":{format_output_str:[5,2,1,""],format_output_str_numpy:[5,2,1,""],format_output_str_sympy:[5,2,1,""],format_output_str_torch:[5,2,1,""]},cgp:{CartesianGraph:[1,1,1,""],Genome:[1,1,1,""],Population:[1,1,1,""],evolve:[3,3,1,""],node:[5,0,0,"-"],node_impl:[5,0,0,"-"],node_input_output:[5,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function"},terms:{"0044512108493895e":7,"005518914491199e":7,"005898269260926e":7,"006716942103424e":7,"0083185194153266e":7,"012721096481824e":7,"0142673315538603e":7,"0148075971007388e":7,"0153481508515973e":7,"015643814149625e":7,"0253969169037175e":7,"0260802238362535e":7,"0273428130642886e":7,"028224781303933e":7,"028293776342745e":7,"0284687170222914e":7,"0308520044321419e":7,"031173691001136e":7,"0314011042155286e":7,"0319504966940762e":7,"0343467427580095e":7,"0350188539812629e":7,"037226759022755e":7,"0373716882522507e":7,"0383119211748223e":7,"039200931582604e":7,"039761631017949e":7,"0403162728212182e":14,"040407294816282e":7,"042417811138361e":7,"0425998829672e":7,"044968881889211e":7,"0465965912643985e":14,"0477078599038801e":7,"0482659380540415e":7,"0488243138666934e":7,"050772794358825e":7,"051096655335317e":7,"052388933310334e":7,"0525944048201067e":7,"0528923586553802e":14,"053119412996946e":7,"0550801705540985e":7,"055473645599688e":7,"055880920826457e":7,"0575086859038987e":7,"058922294064902e":7,"059154323848727e":14,"05f":12,"063747677070932e":7,"0648393318462806e":7,"0650393254405723e":7,"0652249266356427e":14,"0654065352370475e":7,"0659740412701253e":7,"0690107706057994e":7,"0705382326344675e":7,"070596177547299e":7,"0706019354335675e":14,"0716411389078588e":7,"072590084893348e":7,"072997024985652e":7,"080480056918192e":14,"0822509269563585e":7,"0828274049278086e":7,"0834041904044162e":7,"086663263281516e":7,"090970755429702e":7,"091912201180289e":7,"0940918248713635e":7,"0999472256108432e":7,"0e2":[10,11,13,16],"0e4":8,"1005331298803043e":7,"1011193465857509e":7,"102615444754831e":7,"1041190440963595e":7,"1043943951289726e":7,"1055153352424594e":7,"105848798397484e":7,"106398768541265e":7,"1075031794643525e":7,"1082362143686246e":7,"1121294089376325e":7,"1123687372440872e":7,"1179328831013425e":7,"118528367878699e":7,"1191241700595891e":7,"1200053680266502e":7,"123236680097046e":14,"1279106959264007e":7,"13500247696686e":7,"1362126311661775e":7,"136817852902419e":7,"1374233972912588e":7,"137737719427379e":7,"137950215103696e":7,"13880415266346e":7,"139592975641878e":7,"1399434215716244e":7,"141219695029289e":7,"1446327233373472e":7,"1489009658364399e":7,"151300262983619e":7,"15318512426874e":7,"1547912783011874e":7,"1554063963234818e":7,"1560218421612713e":7,"156633719568518e":7,"158315152165346e":7,"158820621994119e":7,"161035885799362e":7,"16305120580581e":7,"164944304788966e":7,"166125354812942e":14,"1731016778293805e":7,"1736737120365566e":7,"173776556999241e":7,"1742988880035214e":7,"1749243973400464e":7,"1749344547731967e":7,"180366752387463e":7,"186632979787163e":7,"188662834888211e":7,"1896302308431152e":7,"191057837838716e":7,"191661800012643e":7,"1928648997044865e":7,"193500298123723e":7,"1941360354387309e":7,"195499195824013e":7,"1977951842111707e":7,"199683919062825e":7,"20314297921591e":7,"204282018526142e":7,"2059905840168662e":7,"207048196771598e":7,"208249044732012e":7,"208869798177893e":14,"209320808906968e":7,"2099579709054813e":7,"210497639645818e":7,"211952481037743e":7,"212369889582592e":7,"2130156778765891e":7,"2136618103678079e":7,"218478923040567e":7,"218753025932323e":7,"21889138569885e":7,"218966865954501e":7,"219073118285661e":7,"219959444819059e":7,"220715379137703e":7,"221746833489565e":7,"2225982120593765e":7,"223269311849164e":7,"226273995365602e":7,"226823087976939e":7,"2290745745759115e":7,"2301743607606487e":7,"2321938130627622e":7,"2328501610226143e":7,"233506858703702e":7,"2347615810755779e":7,"23831418576784e":7,"238534618170205e":7,"2393659067730234e":7,"24163712643932e":7,"245396044821348e":7,"245446257984218e":7,"2457971871821608e":14,"2466423318332715e":7,"249491265664885e":7,"25058544542861e":14,"252341885061376e":7,"2530089654229185e":7,"2536764010004577e":7,"2547947407822844e":7,"25509867801454e":7,"2593444953407397e":14,"2607083518895673e":7,"2624452210134384e":7,"2669316061324506e":7,"26997480720008e":7,"272795111153977e":7,"272819406061958e":7,"2729022729656698e":14,"2734973940760493e":7,"274175743200611e":7,"2753134150452421e":7,"275873546956476e":7,"278439358969847e":7,"2791137288466834e":7,"2800689552310394e":7,"282162408504499e":7,"2833780395758635e":7,"2848422284486582e":7,"2863140927698259e":14,"2869354743545314e":7,"288451067003709e":14,"289610189666946e":7,"2936317629758252e":7,"2943208369514355e":7,"2950102779911614e":7,"29593748806338e":7,"298225790033011e":7,"2990801926213286e":14,"299688575234535e":14,"304304188550883e":7,"306733607296162e":7,"307129612600098e":7,"3096096228535896e":14,"313509670770486e":14,"314025440977303e":7,"3147844305111633e":7,"3154847718688517e":7,"3157907103039982e":7,"3161854862325997e":7,"3194789187242663e":7,"31958310056805e":14,"320714426954067e":7,"3221087664240087e":7,"324250391750824e":7,"3262262016229374e":7,"3270388026813504e":7,"3319872226450057e":7,"3362829733242112e":7,"336789617254456e":7,"3369947663677034e":7,"3377069383920294e":7,"33770874258489e":7,"33947068058455e":14,"340319246068179e":7,"340697677032532e":7,"342358347581552e":7,"343696521687218e":7,"35326748448513e":7,"3532816213376e":7,"3574056055440107e":7,"357596162133732e":7,"357731132705495e":7,"3581330472319847e":7,"358550649321811e":7,"3586613159513975e":7,"3588564789984338e":7,"359072595462748e":14,"3595802960229045e":7,"362042627902047e":7,"362580638374263e":7,"3661820047796914e":7,"3682143380750863e":7,"368507723426386e":7,"368799381475065e":7,"3700084721559028e":7,"370451071748896e":7,"370621189776944e":7,"3708504930873735e":7,"3742236292315755e":7,"374803330810897e":7,"3757321249191958e":7,"3774988989541173e":14,"380340399909784e":7,"3808621183258584e":7,"3810756609748384e":7,"3818113133156008e":7,"3868058352063127e":7,"390477047406136e":7,"391036894463954e":7,"391918703676957e":14,"3939085182381405e":7,"395952446055638e":7,"397228688951228e":7,"3994349591844995e":7,"40291087355453e":7,"4036581572252023e":7,"4044058384567943e":7,"410577698711631e":7,"420913689983436e":7,"423289298574463e":7,"4251127692095538e":7,"4258504055038678e":7,"4262121617722177e":7,"4266099084223682e":7,"4273698153136346e":7,"427849158087947e":7,"4307533036291044e":7,"430756248200645e":7,"4315303911416352e":7,"435129580462551e":7,"4364266917761875e":7,"437575116178432e":7,"4396164380365e":7,"439938863473767e":7,"443992230593293e":7,"447424729245053e":7,"448713569687122e":7,"4491650307104668e":7,"4499369524769937e":7,"45070928494566e":7,"45473601576692e":7,"455547004212404e":7,"456756269415859e":7,"457844623777724e":7,"46072823165958e":7,"4728608821984088e":7,"473051583788038e":7,"4736454259523138e":7,"4744303871817323e":7,"474947315341221e":7,"4762656362675388e":7,"478544473557647e":7,"4788052023767685e":7,"47918780025669e":7,"4792648109135087e":7,"481118097957549e":7,"482106378859338e":7,"483348133753249e":7,"4840578458662996e":7,"48496935675358e":7,"48986932322007e":7,"494391590292859e":7,"4969441936874993e":7,"4977415659300303e":7,"498034747755452e":7,"498539362202537e":7,"5016934430265124e":7,"502964140912483e":7,"50th":10,"510135603434303e":7,"510605795456356e":7,"511078635332248e":7,"511252931316888e":7,"5125380013813325e":7,"5154161249639136e":7,"515671774456158e":7,"5167560025731218e":7,"5184798924075765e":7,"5214213006243568e":7,"5222317109040215e":7,"523042552290294e":7,"5241711624895794e":7,"5271025846333947e":7,"5285090235237916e":14,"529133812443132e":7,"5327970261952635e":7,"535328937048877e":7,"536155600121326e":7,"5377333234503386e":14,"5380391910969327e":7,"5385127018641667e":7,"538564747113976e":7,"546298641958225e":7,"5469732821737942e":14,"5471223036503454e":7,"547946403497131e":7,"5480308489497646e":7,"54936041132038e":7,"552849036150805e":7,"556141119044658e":14,"556546655860272e":7,"5579084422587345e":7,"559053085824871e":7,"564956210506372e":14,"567510196176085e":7,"568780095034443e":7,"5715827625034982e":7,"571746396487368e":7,"572419891973697e":7,"5725246069023054e":14,"5732574774806953e":7,"578684542134871e":7,"579541967585278e":7,"582721451480445e":7,"5831368905566765e":7,"583882555566997e":7,"586324235696143e":7,"588270989330532e":7,"5890402794956215e":7,"593976632133577e":7,"594698018562787e":7,"5949656816894407e":7,"595891022732023e":7,"5972803129080065e":7,"597990237325344e":8,"5981311308737732e":7,"598349727653297e":7,"5989836491795227e":7,"5997337812345104e":7,"609109198186654e":7,"611534382871476e":7,"6219358672600055e":7,"6233980541696137e":7,"6242627840335822e":7,"625275614390718e":7,"6263888944559313e":7,"62869042244757e":7,"630025110950117e":7,"63047586856904e":7,"631712853257048e":7,"633286635158083e":7,"6399114042341436e":7,"6408363374087487e":7,"6412272754003706e":7,"6415262968167007e":7,"642243022305178e":7,"643646095502621e":7,"6473472786765609e":7,"6495373088674334e":7,"649942856313875e":7,"6508217258806947e":7,"652743118104861e":7,"653484338323382e":7,"6534901029317158e":7,"654688811800248e":7,"656451507940306e":7,"658835371953597e":7,"659837347547347e":7,"659997176404416e":7,"661316976930218e":7,"6628521522275494e":7,"666117347450632e":7,"666387131095686e":7,"666721380181088e":7,"6668750556238303e":7,"6691693147125976e":7,"671266161979988e":7,"675877549940173e":7,"676921703260828e":7,"677814943077986e":7,"6840176621749507e":7,"6842774538454656e":7,"685447348236784e":7,"691581042553279e":7,"700400836150401e":7,"7014491833199339e":7,"7017447441296546e":7,"702606510782971e":7,"7043416912492994e":7,"7052495367462794e":7,"706709429356803e":7,"7077937492037767e":7,"7124705173998794e":7,"714161973438214e":7,"71444802592785e":7,"716533405034193e":7,"7181431279592125e":7,"727905061238534e":7,"7282788630389024e":7,"72911500540179e":7,"729358124690831e":7,"7322100339122778e":7,"73313272401909e":7,"735013770855136e":7,"737535953030211e":7,"7384523934045824e":7,"741578812736107e":7,"7454861542842e":7,"752383511498428e":7,"7554476130058175e":7,"757936247785078e":7,"7594527676688673e":7,"7605340624243192e":7,"7614718399022004e":7,"7638808267525137e":7,"765293692029319e":7,"768897336872407e":7,"769781438969066e":7,"7704581951655042e":7,"7718000537897236e":7,"772510079925149e":7,"7731745423622907e":7,"7734714618221773e":7,"773986902917393e":7,"774452806031646e":7,"775184385794517e":7,"7770600900322872e":7,"78686496213376e":7,"787542430528739e":7,"789321228076525e":7,"79027433949349e":7,"793322627208394e":7,"812437791820063e":7,"814925456987636e":7,"815001214771312e":7,"817844452603621e":7,"8178805425322915e":7,"8185791035491208e":7,"819345423459024e":7,"8195477997668847e":7,"8201437884713605e":7,"82417172830671e":7,"828388190332224e":7,"828554775030776e":7,"8286032879963543e":7,"829404732972476e":7,"832724781959455e":7,"8348711621832305e":7,"8354220012155787e":7,"836608841861961e":7,"836913869221072e":7,"838117712925954e":7,"8389350202474457e":7,"8422661408431612e":7,"84644293384042e":7,"848141005422031e":14,"8483153858438846e":7,"849299921547426e":7,"849557137631079e":7,"856158661112954e":7,"8639201045612775e":7,"865445618450185e":7,"8742668824674905e":7,"875915596446977e":7,"877353378342053e":14,"8785378974528085e":7,"8795385317515225e":7,"879578165471779e":7,"8829200890151206e":7,"891127802370185e":7,"8937331407498816e":7,"89435295944308e":7,"8957006245294474e":7,"8973991824187816e":7,"8975766068101684e":7,"899652714947072e":7,"9027695382788158e":7,"906515782366229e":14,"9092545888619794e":7,"909805491247213e":7,"90986481140154e":7,"9102715850195973e":7,"910749157034731e":7,"911344831822495e":7,"911932267542971e":7,"9122996154743236e":7,"913179488415379e":7,"917927238901982e":7,"92127764366001e":7,"9265195453488976e":7,"927519279315567e":7,"930380657631324e":[6,9],"932170850853546e":7,"935131658081641e":14,"937116675200297e":7,"9404735406418813e":7,"9415071661575954e":7,"94204035773774e":7,"9431046778859086e":7,"945205482935335e":7,"946758351258694e":7,"956562467770255e":7,"958343929553578e":7,"9599197400204536e":7,"960800659812577e":7,"960809273972843e":7,"961307372188651e":7,"961616392292634e":14,"962984620127221e":7,"963417427604301e":7,"965259978177547e":7,"971104503121546e":7,"972202965661826e":7,"9725882731025127e":7,"9732534921539953e":7,"973752442537899e":7,"979494780444712e":7,"9799438946207708e":7,"980933852908367e":14,"982953311917296e":7,"983585963377841e":7,"983849005659054e":7,"984810516597952e":7,"988346321785057e":7,"988949024399114e":7,"9901290881651e":7,"992068778502524e":7,"994223404151546e":7,"997010368529521e":7,"abstract":0,"boolean":[1,3],"case":17,"class":[1,2,3,5,12,14,23,24,26],"default":[1,3,4,7,8,10,11,12,13,14,15,16,21],"export":25,"final":[6,7,8,9,10,11,12,13,14,15,16,22],"float":[1,3,4,5,6,12],"function":[1,2,3,4,6,7,8,10,11,12,13,14,16,17,18,19,22,23,24,25,26],"import":[1,6,7,8,9,10,11,12,13,14,15,16,23],"int":[1,2,3,4,5,7,8,10,11,12,13,14,15,16],"long":[6,9,23],"new":[1,2,14,23],"return":[1,2,3,4,6,7,8,9,10,11,12,13,14,15,16,19,23,24],"static":26,"switch":3,"true":[1,6,7,8,9,10,11,12,13,14,15,16,19],"try":[8,12,15],"while":[12,22],For:[8,12,23],One:22,The:[3,5,6,7,8,9,10,11,12,13,14,15,16,19,22,23,24,25,26,27],Then:[7,8,10,11,12,13,14,15,16],There:24,These:[1,22,24,25,26],Use:19,Used:7,__main__:[8,12],__name__:[8,12],_ariti:[14,23],_def_numpy_output:23,_def_output:[12,14,23],_def_sympy_output:23,_def_torch_output:23,_def_x_output:23,_initial_valu:[14,23],about:19,abov:14,accept:[1,7,8,9,10,11,12,14,15,16,24],accordingli:[10,11,16],account:[1,22],achiev:[14,15],across:14,act:22,action:12,activ:[1,5],actual:[7,14],adapt:[5,14,22],add:[5,6,7,8,9,10,11,12,13,14,15,16,19,23],add_ax:12,add_subplot:[7,14],added:[7,8,10,11,12,13,14,15,16],adding:23,addit:[9,14,23],adjust:[22,23],adventur:26,after:[1,3,7,8,10,11,13,14,15,16,22],agarw:2,agent:12,algorithm:[0,3,6,7,8,9,10,11,12,13,14,15,16,19,22,24,25,26],all:[1,2,17,26],allow:24,alpha:[8,10,11,13],also:[24,26],alter:1,alwai:[6,9],analysi:16,angl:[14,23],ani:[1,23,24],anim:12,api:25,append:[6,7,8,9,10,11,12,13,14,15,16,19,24],appli:[13,15],applic:25,arang:15,arbitrari:22,arg:[7,8,10,11,12,13,14,15,16],argument:[6,8,9,10,11,15,16,19],ariti:[1,5,14,23],around:24,arrai:[1,7,8,24,27],arxiv:25,assess:24,assign:12,associ:24,assum:[6,9],atom:5,auto_exampl:18,auto_examples_jupyt:17,auto_examples_python:17,automat:[4,23,27],automl:10,avail:[7,14,24],averag:[7,12],avoid:[6,9],ax_fit:[7,8,10,11,13,14],ax_funct:[7,8,10,11,13],axes:[8,10,11,13],axhlin:[10,11,13,14,16],axi:[7,8,12],base:[2,4,5,7,22,27],basic:[23,25],batch_siz:[7,14],becaus:13,been:1,behavior:12,behaviour:12,best:[12,14,22],best_expr:12,best_expr_str:12,better:12,between:[1,7,8,10,11,13,14,15,16],beyer:[25,27],biscani:[7,22],block:23,bookkeep:[7,8,12,14],bool:[1,2,3],both:14,bracket:[14,23,26],branch:26,build:[23,26],cach:[17,18],calcul:[7,23],call:[3,4,6,7,8,9,12,14],callabl:[1,2,3,4,8,10,11,12,14,16,24],callback:[3,7,8,10,11,12,13,14,15,16,19],can:[1,5,6,7,12,14,22,23,24,25,26],car:12,cartesian:[0,7,8,10,11,12,13,14,15,16,20,21,25,27],cartesiangraph:[1,5,24],catch_warn:[8,12],caught:12,caus:13,certain:23,certik:27,cgp:[0,2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,24,26],cham:[7,22],champion:[1,6,7,8,9,10,11,12,13,14,15,16,24],champion_numpi:15,chanan:27,chang:1,check:[12,17,18,26],chintala:27,choos:12,chosen:24,citat:25,cite:20,classmethod:5,click:[6,7,8,9,10,11,12,13,14,15,16],clip:[4,7],clip_valu:4,clone:[1,24,26],close:12,closur:[7,8,12,14],cls:5,code:[1,6,7,8,9,10,11,12,13,14,15,16,17,26],colbert:27,color:[10,11,13,14,16],com:[12,26],combin:2,come:23,comment:[6,9],compar:[6,9,14],compat:[7,8,10,11,12,13,14,15,16,25],compil:[1,24,26],complet:23,comprehens:27,compris:[8,24],comput:[1,2,5,6,7,9,12,22,23,24,25,27],computation:25,concept:24,condit:15,confer:[7,10,22,27],consecut:12,consist:[6,7,9,12,24],constant:[5,7,8,10,11,12,13,14,16,23],constantfloat:[5,6,8,9,10,11,12,13,15,16,19,22,23],constantfloatten:12,constantfloatzeropointon:12,contain:[7,8,14,17,22,24],continu:12,continuous_act:12,copi:24,core:[1,24],correspond:[14,25],creat:[1,6,7,8,9,10,11,12,13,14,15,16,24],criteria:12,cum_reward_all_episod:12,cum_reward_averag:12,cum_reward_this_episod:12,cumul:12,current:[2,3,12],custom:[14,21,22,24],data:23,deb:2,decor:[17,18],dedic:23,def:[6,7,8,9,10,11,12,13,14,15,16,19,24],defin:[1,6,7,8,9,10,11,12,13,14,15,16,19,22,23,26],definit:[1,22],delta_fit:14,demonstr:[7,8,10,11,12,13,14,15,16,17,18],denot:14,depend:[13,15,26],descent:22,determin:[1,7,10,12,14],determine_active_region:1,determine_permissible_valu:1,determinist:[6,9],dev:26,develop:26,devid:5,devito:27,dict:[1,8,23],dictionari:[5,8,13],differ:[6,8,13,15,22,23],differenti:[4,14,17,18,22,27],difficulti:8,dimension:[24,25],directli:26,discov:25,disk_cach:[6,9],div:[5,8,12,19,23],divid:[8,12],divis:[8,12,23],doc:26,docopt:[7,8,10,11,12,13,14,15,16],docopt_str:[7,8,10,11,12,13,14,15,16],document:[25,26],doi:[1,16],don:26,done:12,doubl:23,double_scalar:[8,12],doubletensor:[7,14],download:[6,7,8,9,10,11,12,13,14,15,16,17],dpi:[7,10,11,12,13,14,15,16],due:[8,12],dure:[1,22,24],e103:27,ea_param:[6,7,8,9,10,11,12,13,14,15,16,19],ea_params_with_reord:16,ea_with_reord:16,each:[1,3,7,12,22,23,24],earli:10,easi:8,easili:[7,8],effect:16,effici:27,either:[3,13],elitist:2,els:[12,15],empti:8,emul:[6,9],enclos:[14,23],encod:25,encount:[8,12],end:[12,14,15],engin:27,ensur:[7,8,10,11,12,13,14,15,16],enumer:[8,12,14],env:12,environ:[17,18],episod:12,equal:13,equip:24,equival:[17,18],error:[7,8,10,11,12,13,14,15,16],estim:10,european:[7,22,27],evalf:6,evalu:[2,3,6,7,8,9,10,11,12,13,14,15,16,24,25],evaluate_champion:12,everi:[1,24],everyth:19,evolut:[2,3,7,8,10,11,12,13,14,15,16,19,22,25,27],evolutionari:[0,6,9,12,17,18,19,22,23,24,25,27],evolv:[3,6,7,8,9,10,11,12,13,14,15,16,19,22,25],evolve_param:[6,7,8,9,10,11,12,13,14,15,16,19],exampl:[18,21,23,24,25,26],example_cach:[6,18],example_caching_cach:6,example_differential_evo_regress:[7,18],example_evo_regress:[8,18],example_fec_cach:[9,18],example_fec_caching_cach:9,example_hurdl:[10,18],example_minim:[10,11,18],example_mountain_car:[12,18],example_multi_genom:[13,18],example_parametrized_nod:[12,14,18],example_piecewise_fitness_histori:15,example_piecewise_target_funct:[15,18],example_reord:[16,18],except:[8,12,15],exclud:1,execut:[1,8,12,18,19],exp:23,expens:25,explicitli:[7,8,10,11,12,13,14,15,16],exponenti:23,expr:[1,6,12,13,14],expr_champion:[12,14,15],expr_str:12,express:[1,6,7,8,10,11,12,13,14,15,16,22,23,24,25,26],expscal:23,extens:25,extra:26,extra_requir:26,f_graph:8,f_lambdifi:12,f_target:[6,7,8,9,10,11,13,14,15,16],f_target_easi:8,f_target_hard:8,factor:14,fail:12,fals:[1,2,3,12,15],fast:[2,10],faster:[7,22,27],fec_batch_s:9,fec_max_valu:9,fec_min_valu:9,fec_se:9,few:10,fig:[7,8,10,11,12,13,14,15,16],figsiz:[7,8,10,11,12,13,14,16],figur:[7,12,14,15,16,25],file:[6,9,18],filterwarn:[8,12],find:22,fine:14,finish:[7,8,10,11,13,16],finit:3,first:[5,6,7,8,9,10,11,13,14,15,16],fit:[1,2,3,6,7,8,9,10,11,12,13,14,15,16,19,22,24,25],fitness_champion:[10,11,12,13,14,15,16],fitness_is_non:[6,7,8,9,10,11,12,13,14,15,16],fitness_par:[1,7,8,19],fittest:16,fix:[7,8,12,14,22,24],flexibl:[12,23],folder:17,follow:19,format:[5,26],format_output_str:5,format_output_str_numpi:5,format_output_str_sympi:5,format_output_str_torch:5,format_parameter_str:5,forward:[14,24],found:[12,14],four:23,framework:[8,15],francisco:[7,22,27],from:[1,5,6,7,8,9,10,11,12,13,14,15,16,23,25,26],fulfil:12,full:[6,7,8,9,10,11,12,13,14,15,16,26],function_bas:12,functool:[7,8,12,14,15],furthermor:[12,23],galleri:[6,7,8,9,10,11,12,13,14,15,16,17],gecco:[7,22,27],gene:1,gener:[1,2,3,6,7,8,9,10,11,12,13,14,15,16,17,22,24],genet:[2,7,8,10,11,12,13,14,15,16,20,22,24,25,27],genom:[0,6,7,8,9,10,11,12,14,15,17,18,19,21,22,23],genome_param:[1,6,7,8,9,10,11,12,13,14,15,16,19],genotyp:[6,24,25],get:[10,12],git:26,github:[12,25,26],given:[1,2,7,8,10,11,12,13,15,16,24],global:5,golden:[7,8,10,11,13,14,16],goldman:[1,16],good:[24,26],govern:23,gradient:[4,7,22,27],gradient_bas:[4,7,14,22],gradient_step:[4,7,14],graph:[0,4,5,7,21,23,25],greater:[3,13,15],gross:27,gym:[17,18],hal:[17,20,21,22,26],happi:[25,26],hard:8,has:[14,15,22],have:1,help:[7,8,10,11,12,13,14,15,16],henc:1,here:[6,7,8,9,10,11,12,13,14,15,16],hidden:[1,5],high:[0,15,25],highest:[1,8,12,14,15],histori:[3,7,8,10,11,12,13,14,15,16,19,24],history_fit:[7,8],history_with_reord:16,home:12,how:[10,12,24],hstack:8,http:[12,25],hurdl:[17,18],hurdle_percentil:[2,10],ident:[6,9],identifi:[6,9],ids:1,idx:5,ieee:2,ifels:[5,15],ignor:[8,12],illustr:[6,8,9],implement:[3,10,23,25],importerror:12,inact:1,includ:1,increas:[2,12,14],ind:[9,12],indent:9,independ:22,index:[12,14],indices_abov:12,individu:[0,2,3,4,6,7,8,9,10,11,12,13,14,15,16,19,21,22,23,25,26],individual_init:1,individualbas:[1,2,3,4],individualmultigenom:[1,24],individualsinglegenom:[1,24],inf:[3,4,8,12,14],infin:[3,12],inform:[4,19],initi:[2,7,14,19,23],initial_valu:5,initialize_fitness_par:[2,3],inner:[6,7,9,12,14],inner_object:[6,7,9,12,14],input:[0,1,2,3,7,9,12,13,14,15,22,23,24],input_nod:5,inputnod:[5,23],instal:[12,25],instanc:[1,2,3,6,7,8,9,10,11,12,13,14,15,16,19,23,24],instanti:[6,7,8,9,12,14],intern:[1,10],interpret:25,introduc:[10,14],introduct:27,invalid:[1,8,12],invers:4,invididu:[1,10,23],invidividualmultigenom:13,involv:7,ipynb:[6,7,8,9,10,11,12,13,14,15,16],item:[7,14],iter:3,its:[5,6,9,12,14,23],izzo:[7,22],jakob:20,jordan:[20,25],jupyt:[6,7,8,9,10,11,12,13,14,15,16,17],just:26,k_local_search:[2,7],kaufmann:[7,22,27],keyword:9,kirpichev:27,label:[7,8,10,11,13,16],lambda:[2,10,11,13,14,16,23,25],lambdifi:12,last:[8,12],latest:26,lead:12,leaderboard:12,leaf:[4,7,22,27],leagu:[25,26],learn:[4,7,10,25],least:12,legend:[8,10,11,13,15,16],len:12,lerer:27,less:[13,15],level:[0,8,25],levels_back:[1,6,7,8,9,10,11,12,13,14,15,16,19],liang:10,lib:12,librari:[22,25,26],like:22,limit:23,line:12,linspac:[6,7,8,9,10,11,13],list:[1,2,4,5,10,11,13,16],local:[0,1,5,7,14,21,23,24,25,27],local_search:[2,4,7,14,22],local_search_param:[7,14],log:[7,8,10,11],loop:[8,12],loss:[4,6,7,8,9,10,11,13,14,15,16,22],low:10,machin:10,mai:10,main:[8,12],make:[6,8,9,12,14,15,23],mani:6,manual_se:[7,14],marker:7,master:26,math:[14,23],mathemat:[23,25],matplotlib:[7,8,10,11,12,13,14,15,16],max:[6,7,8,9,10,11,12,13,14,15,16],max_ar:5,max_fit:12,max_gener:[3,6,7,8,9,10,11,12,13,14,15,16,19],max_objective_cal:3,maxim:4,maximilian:20,maximum:[3,7,8,10,11,12,13,14,15,16],mean:[6,7,8,9,10,11,12,13,14,15,16],mean_cum_reward:12,mechan:16,member:23,mereta:[7,22],messag:[8,12],method:[1,3,6,7,8,9,12,14,22,24],meurer:[25,27],meyarivan:2,miller:27,min:15,min_fit:[3,6,7,8,9,10,11,12,13,14,15,16,19],miniconda3:12,minim:[17,18],minimum:3,minut:[6,7,8,9,10,11,12,13,14,15,16],mode:23,modifi:[2,3,8,15,22],modul:[1,4,24,25],more:[12,23],morgan:[7,22,27],most:26,mountain:12,mountaincarcontinu:12,mseloss:[7,14],mtrand:1,mu_plus_lambda:3,mul:[5,6,7,8,9,10,11,12,13,14,15,16,19,23],multiobject:2,multipl:[1,10,17,18,23,24],multipli:[5,12],mupluslambda:[2,3,6,7,8,9,10,11,12,13,14,15,16,19],must:15,mutat:[1,24,25],mutation_r:[1,6,7,8,9,10,11,12,13,14,15,16,19],my_custom_attribut:24,myenv:12,n_column:[1,6,7,8,9,10,11,12,13,14,15,16,19],n_episod:12,n_function_evalu:[8,10,11,13,15,16],n_input:[1,6,7,8,9,10,11,12,13,14,15,16,19],n_objective_cal:2,n_offspr:[2,6,7,8,9,10,11,12,13,14,15,16,19],n_output:[1,6,7,8,9,10,11,12,13,14,15,16,19],n_parent:[1,6,7,8,9,10,11,12,13,14,15,16,19],n_process:[2,3,6,7,8,9,10,11,12,13,14,15,16,19],n_row:[1,6,7,8,9,10,11,12,13,14,15,16,19],n_runs_per_individu:12,n_total_step:12,name:[23,26],natur:27,ndarrai:1,necessari:26,need:[2,3,10,11,13,14,16,23],neg:[5,23],network:25,newaxi:13,next:[6,7,8,9,10,11,13,14,15,16],node:[0,1,17,18,21,22,24,25],node_impl:5,node_input_output:5,non:[5,23],none:[1,2,3,4,5,7,12,14,15,16],note:[6,7,9,13,14,22],notebook:[6,7,8,9,10,11,12,13,14,15,16,17],novemb:10,now:13,nsga:2,number:[1,2,3,4,7,8,10,11,12,13,14,15,16,17,22,23,24,26],numer:[4,7,14,21,23,24,25,27],numpi:[1,5,6,7,8,9,10,11,12,13,14,15,16,23,24,25,27],obj:[7,8,12,14,15,19],object:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,19,24,25],objective_on:10,objective_param:12,objective_two:10,observ:12,obtain:4,offspr:[1,5,14,24],old_fit:14,one:[1,2,8,15,23,24],ones_lik:8,onli:[1,2,6,7,8,9,10,15],only_final_solut:12,openai:[17,18],oper:[0,14,15,22,23,24],operatornod:[5,14,23],optim:[4,22,25],option:[1,2,3,4,7,8,10,11,12,13,14,15,16,26],order:[1,22],otherwis:[1,5],our:26,out:[3,6,7,8,9,10,11,12,13,14,15,16],output:[0,1,10,11,13,14,15,16,22,23],output_str:5,outputnod:[5,23],over:[8,10,11,12,13,15,16],pack:[10,11,16],packag:[12,26],page:27,paprocki:27,parallel:3,param:[6,9],paramet:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,19,21,23,24,25],parameter:14,parameter_nam:5,parameter_str:5,parameternod:23,parametr:[5,17,18,22,23],parametrizedadd:14,parent:[1,2,3,5,14,24],partial:[7,8,12,14,15],particular:[1,24,25],pass:[5,8,14,15],paszk:[25,27],pdf:[7,8,10,11,13,14,15,16],peerj:27,per:[4,13,14,15,22],percentil:10,perform:[2,4,6,7,8,9,10,11,12,13,14,15,16,22],permiss:1,permissible_valu:1,petrovici:25,phenotyp:[1,9,24,25],pickl:[6,9],piecewis:[13,17,18],pip:[12,26],pkl:[6,9],plastic:25,pleas:[12,20,23],plot:[7,8,10,11,12,13,14,15,16],plot_fitness_over_generation_index:12,plt:[7,8,10,11,12,13,14,15,16],pmlr:10,png:12,point:[7,8,10,11,13,14,15,16],pop:[2,3,6,7,8,9,10,11,12,13,14,15,16,19,24],pop_with_reord:16,popul:[0,2,3,6,7,8,9,10,11,12,13,14,15,16,19,21,23,25],population_param:[6,7,8,9,10,11,12,13,14,15,16,19],posit:[3,22],possess:24,pow:[5,23],power:[5,23],practic:[6,9],pratap:2,precis:10,preparatori:12,present:8,pretti:1,pretty_str:[1,5],primit:[1,5,6,7,8,9,10,11,12,13,14,15,16,19],print:[1,3,6,7,9,12,13,14,15],print_active_nod:1,print_progress:[3,6,7,8,9,10,11,12,13,14,15,16,19],priori:23,probabl:1,problem:[19,24],proc:27,procedur:22,proceed:[7,22,27],process:3,produc:[6,14,24],product:26,program:[7,8,10,11,12,13,14,15,16,20,22,24,25,27],progress:[3,7,8,12,14,15,19],properti:[1,5,24],provid:[5,9,22,24],pseudo:15,punch:[7,16,22,27],pure:[20,23,25],purpos:8,pyplot:[7,8,10,11,12,13,14,15,16],python3:12,python:[1,6,7,8,9,10,11,12,13,14,15,16,17,20,23,24,25,27],pytorch:[1,5,23,24,25,26,27],rais:[5,12],random:[1,7,8,9,10,11,13,14,15,16,24],randomli:24,randomst:[1,15],rang:12,rate:[4,7],rathnayak:27,real:10,realiz:24,reason:26,receiv:[7,12,23],recent:26,record:[7,8,10,11,12,13,14,15,16,19,24],recording_callback:[7,8,10,11,12,13,14,15,16,19,24],recording_callback_with_reord:16,reevalu:[6,9,22],refer:[7,10,21,23,25],regard:23,region:1,regist:5,regress:[17,18,19,22,23],relas:26,render:12,reorder:[1,17,18],reorder_genom:[1,2,16],replac:[1,12],repres:[1,7,8,10,11,13,14,15,16,22,23,24,25],represent:[1,5,23],requir:[14,22,23,26],reset:12,reshap:[7,8,15],respect:1,result:[6,7,8,9,10,11,12,13,14],retriev:[6,9],reward:12,rng:[1,15],rocklin:27,rule:25,run:[6,7,8,9,10,11,12,13,14,15,16,26],runtim:[6,9],runtimewarn:12,same:[6,9,23],sampl:[9,10],san:[7,22,27],savefig:[7,8,10,11,12,13,14,15,16],scale:[14,23],schmidt:[20,25],schwefel:[25,27],scienc:27,scipi:[7,8,10,11,13,14,16],scratch:10,script:[6,7,8,9,10,11,12,13,14,15,16,17],search:[0,1,5,6,7,8,9,10,11,12,13,14,15,16,21,23,24,25,27],second:[5,6,7,8,9,10,11,12,13,14,15,16],see:[22,23,24],seed:[1,6,7,8,9,10,11,12,13,14,15,16,19],select:[13,15,22,24],senn:25,sens:[6,8,9],separ:22,sequenti:10,set:[3,4,5,7,8,10,11,13,14,15,16,23,24],set_xlabel:[7,8,10,11,12,13,14],set_ylabel:[7,8,10,11,12,13,14],set_ylim:[8,10,11,13],set_yscal:[7,8,10,11,13,14],sever:[17,24],sgd:4,shift:14,should:[7,8,15],shuffl:1,simpl:[10,11,13,23],simplifi:[1,6,15],simultan:24,sinc:22,singl:[2,24],single_genome_param:13,site:12,size:[8,15],skip:4,sleep:[6,9],smith:27,solut:12,solv:[17,18,19,24],some:[22,24,26],sourc:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],space:12,special:23,specif:24,specifi:[6,9,23,26],specifii:9,sphinx:[6,7,8,9,10,11,12,13,14,15,16,17],spike:25,springer:[7,22,27],squar:[7,8,10,11,13,14,15,16,26],start:12,statist:9,step:[2,3,4,7,12,19],stochast:22,stop:[3,10],store:[1,22,24],str:[1,5,7,8,10,11,12,13,14,15,16],straightforward:23,strategi:[2,25,27],string:[5,14,23],structur:[0,25,27],sub:[5,6,7,8,9,10,11,12,13,14,15,16,19,23],subclass:[5,23],subplot:[8,10,11,13,15],substract:5,subtract:23,suitabl:22,sum:[13,14],support:[3,22,25],sure:14,symbol:[12,25,27],symlog:[7,8,10,11,13,14,16],sympi:[1,5,6,12,23,24,25,26,27],sympy_express:15,take:[2,3,12,19,22],taken:[1,12],target:[6,7,8,9,10,11,13,14,16,17,18,24,25],target_funct:8,task:[7,8,10,11,12,13,14,15],techniqu:24,tensor:[4,7,24],term:23,tevc:[1,16],than:[3,8,13,15],thei:[1,7,10,23],them:[9,23],thi:[3,6,7,9,12,14,17,22,23,24,26],thin:24,third:5,thomson:27,those:10,thu:[13,15,24],ties:19,time:[6,7,8,9,10,11,12,13,14,15,16],titl:15,to_func:[1,7,8,9,10,11,12,16,24],to_numpi:[1,9,13,15],to_nympi:24,to_sympi:[1,6,7,9,12,13,14,15,24],to_torch:[1,7,14,24],togeth:19,tool:26,topchi:[7,22,27],torch:[1,4,7,14,23,26],torch_cl:1,total:[6,7,8,9,10,11,12,13,14,15,16,18],tournament_s:[2,6,7,8,9,10,11,12,13,14,15,16,19],transact:2,transform:[13,15,23],translat:25,travi:12,trial:12,tune:[14,24],tupl:1,two:[5,8,10,12,13,14,16,24,25],txt:26,type:[1,5,23,24,26],typeerror:15,typic:24,uncom:12,uneven:7,uniform:[8,10,11,13,15,16],uniform_:[7,14],union:[1,4],unless:26,unpack:[10,11,16],updat:[1,2,3,4,7,8,12,15,19],update_n_objective_cal:2,update_parameters_from_torch_class:1,upon:12,upper:10,usa:[7,22,27],usag:[7,8,10,11,12,13,14,15,16,25],use:[1,4,7,8,10,11,13,14,15,17,18,20,22,26],use_fec:9,used:[1,2,3,6,7,9,12,14,22,23,24],uses:[2,6,7,8,9,10,11,13,15,16,23],using:[1,15,17,18],util:[6,9],valu:[1,3,4,5,6,7,8,9,10,11,12,14,15,16,21,23,24,25,27],variabl:[7,24],varoquaux:27,version:[14,26],via:[4,5,7,12,14,21,23,24,25,26],visual:12,visualize_behaviour_for_evolutionary_jump:12,vol:[7,22,27],volum:27,walt:[25,27],warn:[8,12],weights_abov:12,well:[10,23],were:1,when:[4,6,9],where:10,whether:[1,12,13,15],which:[2,3,4,6,7,8,9,10,12,13,14,22,23,24],width:[7,8,10,11,12,13,14,16],wiki:12,within:24,without:[1,16,26],work:20,wrap:[6,8,9],wrapper:24,x_0:[6,7,8,9,12,13,14,15,23],x_0_rang:8,x_1:[8,12,14],x_1_rang:8,x_i:[8,10,11,14,23],xlabel:[15,16],y_target:[8,10,11,13],yang:27,ylabel:[15,16],ylim:[15,16],you:[6,9,20,26],your:20,yscale:16,zenodo:20,zero:[1,8,10,12,13,15],zerodivisionerror:[8,12],zip:[8,14,17]},titles:["API reference","CGP Population structure","Evolutionary Algorithms","High-level API","Local search","Nodes","Example demonstrating the use of the caching decorator.","Example for differential evolutionary regression","Example for evolutionary regression","Example demonstrating the use of the caching decorator with functional equivalance checking","Minimal example for evolutionary regression using hurdles","Minimal example for evolutionary regression","Example: Solving an OpenAI Gym environment with CGP.","Example for evolutionary regression with multiple genomes","Example for evolutionary regression with parametrized nodes","Example for evolutionary regression on a piecewise target function","Example for evolutionary regression with genome reordering","Examples","Computation times","Basic usage","Citation","Documentation","Searching numerical values for parameters via local search","Nodes","Populations and individuals","HAL-CGP","Installation","References"],titleterms:{"abstract":5,"default":23,"function":[9,15],algorithm:2,api:[0,3],basic:19,cach:[6,9],cartesian:[1,24],cgp:[1,12,23,25],check:9,citat:20,comput:18,custom:23,decor:[6,9],demonstr:[6,9],differenti:7,document:21,environ:12,equival:9,evolutionari:[2,7,8,10,11,13,14,15,16],exampl:[6,7,8,9,10,11,12,13,14,15,16,17,22],genom:[1,13,16,24],graph:[1,24],gym:12,hal:[23,25],high:3,hurdl:10,individu:[1,24],input:5,instal:26,level:3,local:[4,22],minim:[10,11],multipl:13,node:[5,14,23],numer:22,openai:12,oper:5,output:5,paramet:22,parametr:14,piecewis:15,popul:[1,24],refer:[0,16,22,27],regress:[7,8,10,11,13,14,15,16],reorder:16,search:[4,22],solv:12,structur:1,target:15,time:18,usag:19,use:[6,9],using:10,valu:22,via:22}})