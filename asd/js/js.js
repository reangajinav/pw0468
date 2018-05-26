

				
				function konversi() {
					var nilai = document.getElementById("nilai").value;
					var usd = document.getElementById("usd");
					var idr = document.getElementById("idr");
					var hasilnya = document.getElementById("hasil");
					var data;
					if (usd.checked)
					{	
						data = nilai / 13500;
						hasilnya.innerHTML= "hasil Rp" +nilai+ " adalah $" + data;	
					}
					else
					{
						data = nilai * 13500;
						hasilnya.innerHTML= "hasil $" +nilai+ " adalah Rp." + data;
					
					}
				}
			