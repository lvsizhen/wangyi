var gulp = require('gulp');
var sass = require('gulp-sass'); 

gulp.task('hello',function(){
 	console.log('hello world!');
});
gulp.task('copy-index',function(){
	return gulp.src('index.html').pipe(gulp.dest('dist'));
});
gulp.task('images',function(){
	return gulp.src('images/**').pipe(gulp.dest('dist/images'));
});

gulp.task('js',function(){
	return gulp.src('js/**').pipe(gulp.dest('dist/js'));
});
gulp.task('style',function(){
	return gulp.src('style/**').pipe(gulp.dest('dist/style'));
});
gulp.task('copy-details',function(){
	return gulp.src('details.html').pipe(gulp.dest('dist'));
});
gulp.task('copy-list',function(){
	return gulp.src('list.html').pipe(gulp.dest('dist'));
});
gulp.task('copy-listphp',function(){
	return gulp.src('list.php').pipe(gulp.dest('dist'));
});
gulp.task('copy-loginphp',function(){
	return gulp.src('login.php').pipe(gulp.dest('dist'));
});


gulp.task('copy-mycart',function(){
	return gulp.src('mycart.html').pipe(gulp.dest('dist'));
});
gulp.task('copy-register',function(){
	return gulp.src('register.html').pipe(gulp.dest('dist'));
});

gulp.task('watch',function(){
	gulp.watch('index.html',['copy-index']);
	gulp.watch('images/**',['images']);
	gulp.watch('style/**',['style']);
	gulp.watch('js/**',['js']);
	gulp.watch('details.html',['copy-details']);
	gulp.watch('list.html',['copy-list']);
	gulp.watch('list.php',['copy-listphp']);
	gulp.watch('login.php',['copy-loginphp']);
	gulp.watch('mycart.html',['copy-mycart']);
	gulp.watch('register.html',['copy-register']);
	
});