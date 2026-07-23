export function ContactFooter() {
  return (
    <footer id="contact" className="bg-black px-4 text-white">
      <div className="mx-auto flex min-h-[34rem] max-w-[100rem] flex-col justify-between overflow-hidden pb-14 pt-20 lg:min-h-[38rem] lg:pb-16 lg:pt-24">
        <h2
          className="flex max-w-[94rem] flex-wrap items-start gap-x-2 gap-y-1 self-start text-[clamp(3.2rem,9.8vw,11rem)] font-semibold leading-[0.8] text-white lg:-ml-2"
          aria-label="Shure。sure？sure！"
        >
          <span className="inline-block -rotate-6 translate-y-5">Sh</span>
          <span className="inline-block rotate-3 -translate-y-2">ure。</span>
          <span className="inline-block rotate-6 translate-y-8">sure？</span>
          <span className="inline-block -rotate-3 translate-y-2">sure！</span>
        </h2>
        <div className="mt-14 grid gap-12 pb-2 lg:mt-20 lg:grid-cols-[1fr_auto] lg:items-start">
          <div className="max-w-xl">
            <p className="contact-footer-primary max-w-[40rem] text-2xl sm:text-3xl">
              <span className="block">欢迎来找我聊新项目、</span>
              <span className="block">个人网站、内容表达，</span>
              <span className="block">或者任何正在发光的小想法。</span>
            </p>
            <p className="mt-8 max-w-[25rem] font-taipei text-sm leading-[1.1] text-white/55">
              我喜欢把模糊的灵感整理成清楚、鲜活、有个性的数字表达。这里会慢慢长成一个更像我的个人空间。
            </p>
          </div>
          <div className="mt-1 grid gap-3 font-taipei text-2xl font-semibold leading-none text-white sm:text-3xl lg:mr-2 lg:text-right">
            <a className="transition hover:opacity-70" href="tel:18068849890">
              18068849890
            </a>
            <a
              className="transition hover:opacity-70"
              href="mailto:2664265205@qq.com"
            >
              2664265205@qq.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
