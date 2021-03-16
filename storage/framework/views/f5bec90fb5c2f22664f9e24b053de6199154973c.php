<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
	
	
 	 	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<link rel="stylesheet" href="<?php echo e(asset('css/nav.css')); ?>">


  		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>

    </head>
    <body>
	<section class="container">
 		<div class="left-half">
			<div id="navbar"></div>
		</div>	
	</section>
	<section class="container">
 		<div class="right-half">
			<div class="section-bg">
  				<h1 style="text-align:center;">Dataverse</h1>
			</div>
        	<div id = "page"></div>
		</div>
	</section>
	<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
	<script  src="./script.js"></script>
    <script  src="<?php echo e(asset('js/app.js')); ?>"></script>
	<script  src="<?php echo e(asset('js/pagetwo.js')); ?>"></script>
    </body>
</html>
<?php /**PATH /home/karma_nirvami/my_linux_app/resources/views/home.blade.php ENDPATH**/ ?>