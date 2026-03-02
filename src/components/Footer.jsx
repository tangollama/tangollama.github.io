const today = new Date();

export default () => (
<footer class="footer text-muted text-center">
	<span class="m-auto">
	<b>Joel Worrall</b> &copy; {today.getFullYear()}.{" "}
	<a href="https://github.com/tangollama/tangollama.github.io">Coded</a>{" "}
	with&nbsp;
	<span class="heart">&nbsp;❤&nbsp;</span> thanks to&nbsp;
	<a href="https://astro.build/">Astro</a> and Open Source.
	</span>
</footer>
);

