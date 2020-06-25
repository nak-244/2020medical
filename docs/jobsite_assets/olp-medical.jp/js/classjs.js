<script>
			//エリアを絞り込むと、エリアに対応した都道府県のみ検索条件として表示させる
			function ajaxAreaToKen2(){
				var url = "index.cfm?fuseaction=job.ajax_areatopref";
				var selected_ken = $('select[name="srh_ken_param2"]').val();
				var selected_city = $('select[name="srh_city_param2"]').val();

				var arr_area_param = [];
				$('[name="srh_area_param2"]:checked').each(function(){
					arr_area_param.push($(this).val());
				});
				var str_area_param = arr_area_param.join(',');//現在選択中のエリアID(カンマ区切り)

				$.post(url,{
					aj_areatopref:true,
					aj_area_id:str_area_param
				},function(response){
					if(!response || response.substr(0,7) != '<option'){
						var resHtml = '<option value="">----</option>';//デフォルト値
					} else {
						var resHtml = response;
					}
					$('select[name="srh_ken_param2"]').html(resHtml);

					resumeSelectedKen2(selected_ken);
					ajaxKenToCity2(true,selected_city);
				});
			}
			//あらかじめ選択していた都道府県を再度選択状態にする
			function resumeSelectedKen2(ken_jis){
				$('select[name="srh_ken_param2"] option').each(function(){
					if($(this).val() == ken_jis){
						$('select[name="srh_ken_param2"]').val(ken_jis);
					}
				});
			}
			//県を絞り込むと、県に対応した市区郡のみ検索条件として表示させる
			//resume_flg=trueにすると、resume_idをselectedにする(ページ読み込み直後や、エリア変更により都道府県selectが変更された時に使用する)
			function ajaxKenToCity2(resume_flg,resume_id){
				var url = "index.cfm?fuseaction=job.ajax_areatopref";
				var now_val = $('select[name="srh_city_param2"]').val();
				var ken_jis = $('select[name="srh_ken_param2"]').val();

				$.post(url,{
					aj_kentocity:true,
					aj_ken_jis:ken_jis
				},function(response){
					if(!response || response.substr(0,7) != '<option'){
						var resHtml = '<option value="">----</option>';//デフォルト値
					} else {
						var resHtml = response;
					}
					$('select[name="srh_city_param2"]').html(resHtml);

					if(resume_flg){
						resumeSelectedCity2(resume_id);
					}
				});
			}
			//あらかじめ選択していた市区郡を再度選択状態にする
			function resumeSelectedCity2(city_cd){
				$('select[name="srh_city_param2"] option').each(function(){
					if($(this).val() == city_cd){
						$('select[name="srh_city_param2"]').val(city_cd);
					}
				});
			}

			$(function(){
				ajaxAreaToKen2();
				ajaxKenToCity2(true,"");//ページ読込み直後、検索に指定していた市区郡をselectedにする
				$('[name="srh_area_param2"]').on('change',function(){
					ajaxAreaToKen2();
				});
				$('[name="srh_ken_param2"]').on('change',function(){
					ajaxKenToCity2(false,"");
				});
			});
		</script>
