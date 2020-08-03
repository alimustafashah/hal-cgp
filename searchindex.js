Search.setIndex({docnames:["api_reference/api_reference","api_reference/cgp","api_reference/ea","api_reference/hl_api","api_reference/local_search","api_reference/nodes","auto_examples/example_caching","auto_examples/example_differential_evo_regression","auto_examples/example_evo_regression","auto_examples/example_mountain_car","auto_examples/example_parametrized_nodes","auto_examples/index","auto_examples/sg_execution_times","basic_usage","citation","index","installation","references"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,sphinx:56},filenames:["api_reference/api_reference.rst","api_reference/cgp.rst","api_reference/ea.rst","api_reference/hl_api.rst","api_reference/local_search.rst","api_reference/nodes.rst","auto_examples/example_caching.rst","auto_examples/example_differential_evo_regression.rst","auto_examples/example_evo_regression.rst","auto_examples/example_mountain_car.rst","auto_examples/example_parametrized_nodes.rst","auto_examples/index.rst","auto_examples/sg_execution_times.rst","basic_usage.rst","citation.rst","index.rst","installation.rst","references.rst"],objects:{"":{cgp:[15,0,0,"-"]},"cgp.CartesianGraph":{determine_active_regions:[1,2,1,""],pretty_str:[1,2,1,""],print_active_nodes:[1,2,1,""],to_func:[1,2,1,""],to_numpy:[1,2,1,""],to_sympy:[1,2,1,""],to_torch:[1,2,1,""]},"cgp.Genome":{clone:[1,2,1,""],determine_permissible_values:[1,2,1,""],mutate:[1,2,1,""],randomize:[1,2,1,""],update_parameters_from_torch_class:[1,2,1,""]},"cgp.Population":{champion:[1,2,1,""],fitness_parents:[1,2,1,""],mutate:[1,2,1,""]},"cgp.ea":{MuPlusLambda:[2,1,1,""]},"cgp.ea.MuPlusLambda":{initialize_fitness_parents:[2,2,1,""],step:[2,2,1,""]},"cgp.individual":{IndividualMultiGenome:[1,1,1,""],IndividualSingleGenome:[1,1,1,""]},"cgp.local_search":{gradient_based:[4,3,1,""]},"cgp.node":{Node:[5,1,1,""],OperatorNode:[5,1,1,""],register:[5,3,1,""]},"cgp.node.Node":{activate:[5,2,1,""],arity:[5,2,1,""],format_output_str:[5,2,1,""],format_output_str_numpy:[5,2,1,""],format_output_str_sympy:[5,2,1,""],format_output_str_torch:[5,2,1,""],idx:[5,2,1,""],inputs:[5,2,1,""],max_arity:[5,2,1,""],output:[5,2,1,""],output_str:[5,2,1,""],pretty_str:[5,2,1,""]},"cgp.node.OperatorNode":{format_output_str:[5,2,1,""],format_output_str_numpy:[5,2,1,""],format_output_str_sympy:[5,2,1,""],format_output_str_torch:[5,2,1,""],format_parameter_str:[5,2,1,""],initial_value:[5,2,1,""],parameter_str:[5,2,1,""]},"cgp.node_impl":{Add:[5,1,1,""],ConstantFloat:[5,1,1,""],Div:[5,1,1,""],Mul:[5,1,1,""],Parameter:[5,1,1,""],Pow:[5,1,1,""],Sub:[5,1,1,""]},"cgp.node_input_output":{InputNode:[5,1,1,""],OutputNode:[5,1,1,""]},"cgp.node_input_output.InputNode":{format_output_str:[5,2,1,""],format_output_str_numpy:[5,2,1,""],format_output_str_sympy:[5,2,1,""],format_output_str_torch:[5,2,1,""]},"cgp.node_input_output.OutputNode":{format_output_str:[5,2,1,""],format_output_str_numpy:[5,2,1,""],format_output_str_sympy:[5,2,1,""],format_output_str_torch:[5,2,1,""]},cgp:{CartesianGraph:[1,1,1,""],Genome:[1,1,1,""],Population:[1,1,1,""],evolve:[3,3,1,""],node:[5,0,0,"-"],node_impl:[5,0,0,"-"],node_input_output:[5,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function"},terms:{"005898269260926e":7,"006008596410464e":7,"010442304193027e":7,"012721096481824e":7,"0147490346882865e":7,"015643814149625e":7,"0159353607771255e":7,"0172177572590726e":7,"0197237004790402e":7,"022261869188045e":7,"0235261673691002e":7,"0253969169037175e":7,"0273428130642886e":7,"028293776342745e":7,"0284687170222914e":7,"0298027191206848e":7,"031173691001136e":7,"0343467427580095e":7,"0350188539812629e":7,"0373716882522507e":7,"039761631017949e":7,"0403162728212182e":10,"040407294816282e":7,"0425998829672e":7,"044968881889211e":7,"0465965912643985e":10,"050772794358825e":7,"051096655335317e":7,"0525944048201067e":7,"0528923586553802e":10,"053119412996946e":7,"0532132966891278e":7,"055473645599688e":7,"0571406430871132e":7,"0589305477380354e":8,"059154323848727e":10,"05f":9,"0610826347156312e":7,"0650393254405723e":7,"0652249266356427e":10,"0690107706057994e":7,"070596177547299e":7,"0706019354335675e":10,"072590084893348e":7,"072997024985652e":7,"080480056918192e":10,"088676657197975e":7,"0918590799852518e":7,"0959305336265669e":7,"096465162007269e":7,"0e4":8,"100017169661244e":7,"1037576169418875e":8,"1041190440963595e":7,"104282709941481e":7,"1047314288238813e":7,"1082362143686246e":7,"111806719241092e":7,"1121294089376325e":7,"1123687372440872e":7,"116308720894485e":7,"1200053680266502e":7,"123236680097046e":10,"1279106959264007e":7,"127929181919959e":7,"1319229019101252e":7,"1361437501034089e":7,"138326068436559e":7,"139592975641878e":7,"1403803379549664e":7,"141947447462344e":7,"14215258218699e":7,"1446327233373472e":7,"1489009658364399e":7,"151300262983619e":7,"152331517162226e":7,"15318512426874e":7,"157138429335479e":7,"157598332390838e":7,"161121351569281e":7,"16305120580581e":7,"164944304788966e":7,"1653169221074915e":7,"166125354812942e":10,"1731016778293805e":7,"1733912122661633e":7,"1734567940983843e":7,"1778325187201979e":7,"180097897764823e":7,"180366752387463e":7,"1814956111930884e":7,"1822245606707633e":7,"186459818971638e":7,"186632979787163e":7,"188662834888211e":7,"1896302308431152e":7,"191057837838716e":7,"191661800012643e":7,"195499195824013e":7,"1977951842111707e":7,"199683919062825e":7,"20314297921591e":7,"204282018526142e":7,"2059905840168662e":7,"208869798177893e":10,"21449694334211e":7,"2165146984055437e":7,"218478923040567e":7,"2186540116247034e":7,"219073118285661e":7,"219959444819059e":7,"220715379137703e":7,"221050982469274e":7,"225604182538767e":7,"226273995365602e":7,"2301743607606487e":7,"2306561116902546e":7,"2347615810755779e":7,"238534618170205e":7,"2393659067730234e":7,"2427029649886666e":7,"2447693649851756e":7,"245128136241582e":7,"245396044821348e":7,"2457971871821608e":10,"249491265664885e":7,"25058544542861e":10,"253139926760983e":7,"2547947407822844e":7,"25509867801454e":7,"2593444953407397e":10,"2611525357674824e":7,"2615417022305026e":7,"2658552707869774e":7,"2669316061324506e":7,"26997480720008e":7,"2705755423022876e":7,"272795111153977e":7,"2729022729656698e":10,"2753134150452421e":7,"275873546956476e":7,"278439358969847e":7,"2791137288466834e":7,"2800689552310394e":7,"2848422284486582e":7,"2863140927698259e":10,"2869354743545314e":7,"288451067003709e":10,"289610189666946e":7,"294141483978776e":7,"2990801926213286e":10,"299688575234535e":10,"306733607296162e":7,"3074282787719207e":7,"3096096228535896e":10,"31015398863391e":7,"3123035724460625e":7,"313509670770486e":10,"317197045917511e":7,"31958310056805e":10,"3221087664240087e":7,"324250391750824e":7,"3262262016229374e":7,"3270388026813504e":7,"3271371737564054e":7,"330622039035345e":7,"3319872226450057e":7,"335814878198089e":7,"3367567808642345e":7,"33770874258489e":7,"33947068058455e":10,"342358347581552e":7,"3445249417603045e":7,"349199276116311e":7,"350499495066298e":7,"35326748448513e":7,"3554020278823408e":7,"358550649321811e":7,"359072595462748e":10,"3604562117408896e":7,"3616881673150405e":7,"362042627902047e":7,"3655292424194367e":7,"368799381475065e":7,"370451071748896e":7,"370621189776944e":7,"3708504930873735e":7,"372761783444935e":7,"3742236292315755e":7,"374803330810897e":7,"3757321249191958e":7,"3774988989541173e":10,"3808621183258584e":7,"383063643361101e":7,"3868058352063127e":7,"390477047406136e":7,"391918703676957e":10,"3994349591844995e":7,"400254213277385e":7,"405136088311485e":7,"406865568471785e":7,"4103757261773255e":7,"410577698711631e":7,"412527321818521e":7,"4156349026954746e":7,"420913689983436e":7,"4215234394777448e":7,"4262121617722177e":7,"427849158087947e":7,"4305531032808735e":7,"4307533036291044e":7,"430756248200645e":7,"4315303911416352e":7,"4396164380365e":7,"448713569687122e":7,"4517073476608076e":7,"45473601576692e":7,"455547004212404e":7,"4566950514421756e":7,"457844623777724e":7,"4591931206400915e":7,"4621269482842083e":7,"4675791008173884e":7,"468307402746284e":7,"4720921705219676e":7,"473051583788038e":7,"478544473557647e":7,"4788052023767685e":7,"483348133753249e":7,"4840578458662996e":7,"48496935675358e":7,"48503931938503e":7,"488160000418866e":7,"498034747755452e":7,"5010507093269297e":7,"5016934430265124e":7,"502964140912483e":7,"5101458783765165e":7,"5103769235362258e":7,"511078635332248e":7,"511252931316888e":7,"5157770890927762e":7,"515913258881688e":7,"5184798924075765e":7,"5197379147756304e":7,"5214292986692044e":7,"523540578748961e":7,"5241711624895794e":7,"526219707793142e":7,"5271025846333947e":7,"5285090235237916e":10,"529133812443132e":7,"5327970261952635e":7,"535328937048877e":7,"5377333234503386e":10,"5385127018641667e":7,"538564747113976e":7,"5468265320167396e":7,"5469732821737942e":10,"547668408625108e":7,"5480308489497646e":7,"556141119044658e":10,"559053085824871e":7,"564956210506372e":10,"5655579885843604e":7,"567510196176085e":7,"5713958261976774e":7,"5725246069023054e":10,"577255433485069e":7,"579541967585278e":7,"5831368905566765e":7,"5861220435093874e":7,"588270989330532e":7,"5890402794956215e":7,"592822304761831e":7,"594698018562787e":7,"5949656816894407e":7,"5994944005963365e":7,"6024907278399356e":7,"609109198186654e":7,"611534382871476e":7,"6121952038192205e":7,"61291662206928e":7,"615054809581701e":7,"617278780125743e":7,"6219358672600055e":7,"6230033471415923e":7,"6263888944559313e":7,"6290553937139176e":7,"630025110950117e":7,"63047586856904e":7,"631712853257048e":7,"632263974187658e":7,"635130008732376e":7,"6399114042341436e":7,"6412272754003706e":7,"6415262968167007e":7,"641954074424282e":7,"643292128251776e":7,"643646095502621e":7,"6473472786765609e":7,"6495373088674334e":7,"653484338323382e":7,"6534901029317158e":7,"666387131095686e":7,"666721380181088e":7,"6668750556238303e":7,"671793344046633e":7,"675877549940173e":7,"6825565608632495e":7,"6842774538454656e":7,"687961294992987e":7,"6888306760955257e":7,"691581042553279e":7,"6951281883183993e":7,"6979844839032402e":7,"700400836150401e":7,"7014491833199339e":7,"7017447441296546e":7,"7077937492037767e":7,"7080450482161653e":7,"714161973438214e":7,"716533405034193e":7,"717708396493242e":7,"7181431279592125e":7,"7282788630389024e":7,"728994484735253e":7,"72911500540179e":7,"731571428319087e":7,"7384523934045824e":7,"741578812736107e":7,"7442949731197543e":7,"7454861542842e":7,"750357439318272e":7,"7507993059584396e":7,"757327894104702e":7,"757936247785078e":7,"7594527676688673e":7,"7638808267525137e":7,"7704581951655042e":7,"7718000537897236e":7,"7734714618221773e":7,"7770600900322872e":7,"784396015517195e":7,"7865912410850447e":7,"78686496213376e":7,"787542430528739e":7,"793322627208394e":7,"796982213010501e":7,"799768575763817e":7,"802236639453523e":7,"8074119317315018e":7,"808298766106283e":7,"814925456987636e":7,"8150417641246184e":7,"8178805425322915e":7,"8201437884713605e":7,"8218099071867503e":7,"828388190332224e":7,"82838950864632e":7,"8286032879963543e":7,"8354220012155787e":7,"836311110909419e":7,"836608841861961e":7,"838117712925954e":7,"8389350202474457e":7,"8422661408431612e":7,"848141005422031e":10,"85412307578861e":7,"856158661112954e":7,"860088023802639e":7,"861309857107471e":7,"8684947870360326e":7,"872989916039572e":7,"8742668824674905e":7,"8746510644073724e":7,"877353378342053e":10,"8816414846987628e":7,"8829200890151206e":7,"885668733872834e":7,"888657972713769e":7,"888840236590905e":7,"89435295944308e":7,"8957006245294474e":7,"8973991824187816e":7,"8996124873243724e":7,"9027695382788158e":7,"906515782366229e":10,"909805491247213e":7,"90986481140154e":7,"9104249058009637e":7,"911344831822495e":7,"911932267542971e":7,"92127764366001e":7,"923749101632922e":7,"9265195453488976e":7,"927519279315567e":7,"932170850853546e":7,"935131658081641e":10,"937116675200297e":7,"939209720767324e":7,"9431046778859086e":7,"9434380419355672e":7,"946758351258694e":7,"9506849633640587e":7,"953296118953054e":7,"9579589087998884e":7,"959950895094706e":7,"960809273972843e":7,"961356550465362e":7,"961616392292634e":10,"962984620127221e":7,"965259978177547e":7,"9725882731025127e":7,"978446148692801e":7,"9799438946207708e":7,"980933852908367e":10,"982953311917296e":7,"983585963377841e":7,"983849005659054e":7,"988949024399114e":7,"994223404151546e":7,"9948410765305874e":7,"99554324866252e":7,"997010368529521e":7,"abstract":0,"boolean":[1,3],"case":11,"class":[1,2,3,5,9,10,16],"default":[1,3,4],"export":15,"final":[6,7,8,9,10],"float":[1,3,4,5,6,9],"function":[1,2,3,4,6,7,8,9,10,13,15,16],"import":[1,6,7,8,9,10],"int":[1,2,3,4,5],"long":6,"new":[1,2,10],"return":[1,2,3,4,6,7,8,9,10,13],"static":16,"switch":3,"true":[1,6,7,8,9,10,13],"try":[8,9],"while":9,For:[8,9],The:[3,5,6,9,10,13,15,16,17],Then:[7,8,9,10],These:[15,16],Use:13,Used:7,__main__:[8,9],__name__:[8,9],_ariti:10,_def_output:[9,10],_initial_valu:10,about:13,abov:10,accept:[1,7,8,9,10],achiev:10,across:10,action:9,activ:[1,5],actual:[7,10],adapt:[5,10],add:[5,6,7,8,9,10,13],add_ax:9,add_subplot:[7,10],addit:10,adventur:16,after:[1,3,7,8,10],agarw:2,agent:9,algorithm:[0,3,6,7,8,9,10,13,15,16],all:[1,2,11,16],alpha:8,also:16,alter:1,alwai:6,angl:10,ani:1,anim:9,api:15,append:[6,7,8,9,10,13],applic:15,argument:[6,8,13],ariti:[5,10],arrai:[1,7,8,17],arxiv:15,assign:9,assum:6,atom:5,auto_exampl:12,auto_examples_jupyt:11,auto_examples_python:11,automat:[4,17],avail:[7,10],averag:[7,9],avoid:6,ax_fit:[7,8,10],ax_funct:[7,8],axes:8,axhlin:10,axi:[7,8],base:[2,4,5,7,17],basic:15,batch_siz:[7,10],been:1,behavior:9,behaviour:9,best:[9,10],best_expr:9,best_expr_str:9,better:9,between:[1,7,8,10],beyer:[15,17],biscani:7,bookkeep:[7,8,9,10],bool:[1,3],both:10,bracket:[10,16],branch:16,build:16,cach:[11,12],calcul:7,call:[3,4,6,7,8,9,10],callabl:[1,2,3,4,8,9,10],callback:[3,7,8,9,10,13],can:[1,5,6,7,9,10,15,16],car:9,cartesian:[0,7,8,9,10,14,15,17],cartesiangraph:[1,5],catch_warn:[8,9],caught:9,certik:17,cgp:[0,2,3,4,5,6,7,8,10,11,12,13,14,16],cham:7,champion:[1,6,7,8,9,10],chanan:17,check:[9,16],chintala:17,choos:9,citat:15,cite:14,classmethod:5,click:[6,7,8,9,10],clip:[4,7],clip_valu:4,clone:[1,16],close:9,closur:[7,8,9,10],cls:5,code:[1,6,7,8,9,10,11,16],colbert:17,color:10,com:[9,16],comment:6,compar:[6,10],compat:15,compil:[1,16],comprehens:17,compris:8,comput:[1,2,5,6,7,9,15,17],computation:15,confer:[7,17],consecut:9,consist:[6,7,9],constant:[5,7,8,9,10],constantfloat:[5,6,8,9,13],constantfloatten:9,constantfloatzeropointon:9,contain:[7,8,10,11],continu:9,continuous_act:9,core:1,correspond:[10,15],creat:[1,6,7,8,9,10],criteria:9,cum_reward_all_episod:9,cum_reward_averag:9,cum_reward_this_episod:9,cumul:9,current:[2,3,9],custom:10,deb:2,decor:[11,12],def:[6,7,8,9,10,13],defin:[1,6,7,8,9,10,13,16],definit:1,delta_fit:10,demonstr:[7,8,9,10,11,12],denot:10,depend:16,determin:[1,7,9,10],determine_active_region:1,determine_permissible_valu:1,determinist:6,dev:16,develop:16,devid:5,devito:17,dict:[1,8],dictionari:[5,8],differ:[6,8],differenti:[4,10,11,12,17],difficulti:8,dimension:15,directli:16,discov:15,disk_cach:6,div:[5,8,9,13],divid:[8,9],divis:[8,9],doc:16,document:16,don:16,done:9,double_scalar:[8,9],doubletensor:[7,10],download:[6,7,8,9,10,11],dpi:[7,9,10],due:[8,9],e103:17,ea_param:[6,7,8,9,10,13],each:[1,3,7,9],easi:8,easili:[7,8],effici:17,elitist:2,els:9,empti:8,emul:6,enclos:10,encod:15,encount:[8,9],end:[9,10],engin:17,enumer:[8,9,10],env:9,environ:[11,12],episod:9,error:[7,8,9,10],european:[7,17],evalf:6,evalu:[3,6,7,8,9,10,15],evaluate_champion:9,everi:1,everyth:13,evolut:[2,3,7,8,9,10,13,15,17],evolutionari:[0,6,9,11,12,13,15,17],evolv:[3,6,7,8,9,10,13,15],evolve_param:[6,7,8,9,10,13],exampl:[12,15,16],example_cach:[6,12],example_caching_cach:6,example_differential_evo_regress:[7,12],example_evo_regress:[8,12],example_mountain_car:[9,12],example_parametrized_nod:[10,12],except:[8,9],exclud:1,execut:[1,8,9,12,13],expens:15,expr:[1,6,9,10],expr_champion:[9,10],expr_str:9,express:[1,6,7,8,9,10,15,16],extens:15,extra:16,extra_requir:16,f_graph:8,f_lambdifi:9,f_target:[6,7,8,10],f_target_easi:8,f_target_hard:8,factor:10,fail:9,fals:[1,3,9],fast:2,faster:[7,17],fig:[7,8,9,10],figsiz:[7,8,9,10],figur:[7,9,10,15],file:[6,12],filterwarn:[8,9],fine:10,finish:[7,8],first:[5,6,7,8,10],fit:[1,2,3,6,7,8,9,10,13,15],fitness_champion:[9,10],fitness_par:[1,7,8,13],fix:[7,8,9,10],flexibl:9,folder:11,follow:13,format:[5,16],format_output_str:5,format_output_str_numpi:5,format_output_str_sympi:5,format_output_str_torch:5,format_parameter_str:5,forward:10,found:[9,10],framework:8,francisco:[7,17],from:[1,5,6,9,10,15,16],fulfil:9,full:[6,7,8,9,10,16],functool:[7,8,9,10],furthermor:9,galleri:[6,7,8,9,10,11],gecco:[7,17],gene:1,gener:[1,2,3,6,7,8,9,10,11],genet:[2,7,8,9,10,14,15,17],genom:[0,6,7,8,9,10,13],genome_param:[1,6,7,8,9,10,13],genotyp:[6,15],get:9,git:16,github:[9,15,16],given:[1,2,7,8,9],global:5,golden:[7,8,10],good:16,gradient:[4,7,17],gradient_bas:[4,7,10],gradient_step:[4,7,10],graph:[0,4,5,7,15],greater:3,gross:17,gym:[11,12],hal:[11,14,16],happi:[15,16],hard:8,has:10,have:1,here:[6,7,8,9,10],hidden:5,high:[0,15],highest:[1,8,9,10],histori:[3,7,8,9,10,13],history_fit:[7,8],how:9,hstack:8,http:[9,15],ident:6,identifi:6,ids:1,idx:5,ieee:2,ignor:[8,9],illustr:[6,8],implement:[3,15],importerror:9,inact:1,includ:1,increas:[9,10],ind:9,index:[9,10],individu:[0,2,3,4,6,7,8,9,10,13,15,16],individualbas:[1,2,3,4],individualmultigenom:1,individualsinglegenom:1,inf:[4,8,9,10],infin:9,inform:[4,13],initi:[2,7,10,13],initial_valu:5,initialize_fitness_par:[2,3],inner:[6,7,9,10],inner_object:[6,7,9,10],input:[0,2,3,7,9,10],inputnod:5,instal:[9,15],instanc:[1,2,3,6,7,8,9,10,13],instanti:[6,7,8,9,10],interpret:15,introduc:10,introduct:17,invalid:[8,9],invers:4,invididu:1,involv:7,ipynb:[6,7,8,9,10],item:[7,10],iter:3,its:[5,6,9,10],izzo:7,jakob:14,jordan:[14,15],jupyt:[6,7,8,9,10,11],just:16,k_local_search:[2,7],kaufmann:[7,17],kirpichev:17,label:[7,8],lambda:[2,10,15],lambdifi:9,last:[8,9],latest:16,lead:9,leaderboard:9,leaf:[4,7,17],leagu:[15,16],learn:[4,7,15],least:9,legend:8,len:9,lerer:17,level:[0,8,15],levels_back:[1,6,7,8,9,10,13],librari:[15,16],line:9,linspac:[6,7,8],list:[1,4,5],local:[0,1,5,7,10,15,17],local_search:[2,4,7,10],local_search_param:[7,10],log:[7,8],loop:[8,9],loss:[4,6,7,8,10],main:[8,9],make:[6,8,9,10],mani:6,manual_se:[7,10],marker:7,master:16,math:10,mathemat:15,matplotlib:[7,8,9,10],max:[6,7,8,9,10],max_ar:5,max_fit:9,max_gener:[3,6,7,8,9,10,13],maxim:4,maximilian:14,maximum:3,mean:[6,7,8,9,10],mean_cum_reward:9,mereta:7,messag:[8,9],method:[1,3,6,7,8,9,10],meurer:[15,17],meyarivan:2,miller:17,min_fit:[3,6,7,8,9,10,13],minimum:3,minut:[6,7,8,9,10],modifi:[2,3,8],modul:[1,4,15],more:9,morgan:[7,17],most:16,mountaincarcontinu:9,mseloss:[7,10],mtrand:1,mu_plus_lambda:3,mul:[5,6,7,8,9,10,13],multiobject:2,multipl:1,multipli:5,mupluslambda:[2,3,6,7,8,9,10,13],mutat:[1,15],mutation_r:[1,6,7,8,9,10,13],n_column:[1,6,7,8,9,10,13],n_episod:9,n_function_evalu:8,n_input:[1,6,7,8,9,10,13],n_offspr:[2,6,7,8,9,10,13],n_output:[1,6,7,8,9,10,13],n_parent:[1,6,7,8,9,10,13],n_process:[2,3,6,7,8,9,10,13],n_row:[1,6,7,8,9,10,13],n_runs_per_individu:9,n_total_step:9,name:16,natur:17,ndarrai:1,necessari:16,need:[2,3,10],network:15,next:[6,7,8,10],node:[0,1,11,12,15],node_impl:5,node_input_output:5,none:[1,2,3,4,5,6,7,8,9,10],note:[6,7,10],notebook:[6,7,8,9,10,11],nsga:2,number:[1,3,4,7,9,11,16],numer:[4,7,10,17],numpi:[1,5,6,7,8,9,10,15,17],obj:[7,8,9,10,13],object:[2,3,4,5,6,7,8,9,10,13,15],objective_param:9,observ:9,obtain:4,offspr:[1,5,10],old_fit:10,one:[1,2,8],ones_lik:8,onli:[1,2,6,7,8],only_final_solut:9,openai:[11,12],oper:[0,10],operatornod:[5,10],optim:[4,15],option:[1,2,3,4,16],otherwis:1,our:16,out:[3,6,7,8,9,10],output:[0,1,10],output_str:5,outputnod:5,over:[8,9],packag:[9,16],page:17,paprocki:17,parallel:3,param:6,paramet:[1,2,3,4,5,6,7,8,9,10,13],parameter:10,parameter_nam:5,parameter_str:5,parametr:[5,11,12],parametrizedadd:10,parent:[1,2,3,5,10],partial:[7,8,9,10],particular:[1,15],pass:[5,8,10],paszk:[15,17],pdf:[7,8,10],peerj:17,per:[4,10],perform:[2,4,6,7,8,9,10],permiss:1,permissible_valu:1,petrovici:15,phenotyp:15,pickl:6,pip:[9,16],pkl:6,plastic:15,pleas:[9,14],plot:[7,8,9,10],plot_fitness_over_generation_index:9,plt:[7,8,9,10],png:9,point:[7,8,10],pop:[2,3,6,7,8,9,10,13],popul:[0,2,3,6,7,8,9,10,13,15],population_param:[6,7,8,9,10,13],pow:5,power:5,practic:6,pratap:2,preparatori:9,present:8,pretti:1,pretty_str:[1,5],primit:[1,5,6,7,8,9,10,13],print:[1,3,6,7,9,10],print_active_nod:1,print_progress:[3,6,7,8,9,10,13],probabl:1,problem:13,proc:17,proceed:[7,17],process:3,produc:[6,10],product:16,program:[7,8,9,10,14,15,17],progress:[3,7,8,9,10,13],properti:[1,5],provid:5,punch:[7,17],pure:[14,15],purpos:8,pyplot:[7,8,9,10],python:[1,6,7,8,9,10,11,14,15,17],pytorch:[1,5,15,16,17],rais:[5,9],random:[1,7,8,10],randomst:1,rang:9,rate:[4,7],rathnayak:17,reason:16,receiv:[7,9],recent:16,record:[7,8,9,10,13],recording_callback:[7,8,9,10,13],reevalu:6,refer:[7,15],region:1,regist:5,regress:[11,12,13],relas:16,render:9,replac:9,repres:[1,7,8,10,15],represent:[1,5],requir:[10,16],reset:9,reshap:[7,8],result:[6,7,8,9,10],retriev:6,reward:9,rng:1,rocklin:17,rule:15,run:[6,7,8,9,10,16],runtim:6,same:6,san:[7,17],savefig:[7,8,9,10],scale:10,schmidt:[14,15],schwefel:[15,17],scienc:17,scipi:[7,8,10],script:[6,7,8,9,10,11],search:[0,1,5,6,7,8,9,10,15,17],second:[5,6,7,8,9,10],seed:[1,6,7,8,9,10,13],senn:15,sens:[6,8],set:[4,5,7,8,10],set_xlabel:[7,8,9,10],set_ylabel:[7,8,9,10],set_ylim:8,set_yscal:[7,8,10],sever:11,sgd:4,shift:10,should:[7,8],simplifi:[1,6],singl:2,size:8,skip:4,sleep:6,smith:17,solut:9,solv:[11,12,13],some:16,sourc:[1,2,3,4,5,6,7,8,9,10,11],space:9,specifi:[6,16],sphinx:[6,7,8,9,10,11],spike:15,springer:[7,17],squar:[7,8,10,16],start:9,step:[2,3,4,7,9,13],stop:3,store:1,str:[1,5,9],strategi:[2,15,17],string:[5,10],structur:[0,15,17],sub:[5,6,7,8,9,10,13],subclass:5,subplot:8,substract:5,sum:10,support:[3,15],sure:10,symbol:[9,15,17],symlog:[7,8,10],sympi:[1,5,6,9,15,16,17],take:[2,3,9,13],taken:9,target:[6,7,8,10,15],target_funct:8,task:[7,8,9,10],tensor:[4,7],than:[3,8],thei:[1,7],thi:[6,7,9,10,11,16],thomson:17,ties:13,time:[6,7,8,9,10],to_func:[1,7,8,9],to_numpi:1,to_sympi:[1,6,7,9,10],to_torch:[1,7,10],togeth:13,tool:16,topchi:[7,17],torch:[1,4,7,10,16],torch_cl:1,total:[6,7,8,9,10,12],tournament_s:[2,6,7,8,9,10,13],transact:2,translat:15,trial:9,tune:10,tupl:1,two:[5,8,9,10,15],txt:16,type:[1,5,16],uncom:9,uneven:7,uniform:8,uniform_:[7,10],union:[1,4],unless:16,updat:[1,2,3,4,7,8,9,13],update_parameters_from_torch_class:1,upon:9,usa:[7,17],usag:15,use:[1,4,7,8,10,11,12,14,16],used:[1,2,3,6,7,9,10],uses:[2,6,7,8],using:1,util:6,valu:[1,4,5,6,7,8,9,10,17],variabl:7,varoquaux:17,version:[10,16],via:[4,5,7,9,10,16],visual:9,visualize_behaviour_for_evolutionary_jump:9,vol:[7,17],volum:17,walt:[15,17],warn:[8,9],were:1,when:[4,6],whether:[1,9],which:[3,4,6,7,8,9,10],width:[7,8,9,10],wiki:9,without:16,work:14,wrap:[6,8],x_0:[6,7,8,9,10],x_0_rang:8,x_1:[8,9,10],x_1_rang:8,x_i:[8,10],y_target:8,yang:17,you:[6,14,16],your:14,zenodo:14,zero:[8,9],zerodivisionerror:[8,9],zip:[8,10,11]},titles:["API reference","CGP Population structure","Evolutionary Algorithms","High-level API","Local search","Nodes","Example demonstrating the use of the caching decorator.","Example for differential evolutionary regression","Example for evolutionary regression","Example: Solving an OpenAI Gym environment with CGP.","Example for evolutionary regression with parametrized nodes","Examples","Computation times","Basic usage","Citation","HAL-CGP","Installation","References"],titleterms:{"abstract":5,algorithm:2,api:[0,3],basic:13,cach:6,cartesian:1,cgp:[1,9,15],citat:14,comput:12,decor:6,demonstr:6,differenti:7,environ:9,evolutionari:[2,7,8,10],exampl:[6,7,8,9,10,11],genom:1,graph:1,gym:9,hal:15,high:3,individu:1,input:5,instal:16,level:3,local:4,node:[5,10],openai:9,oper:5,output:5,parametr:10,popul:1,refer:[0,17],regress:[7,8,10],search:4,solv:9,structur:1,time:12,usag:13,use:6}})