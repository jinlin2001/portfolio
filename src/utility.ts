function scrollSpy(body_ref: any, ul_ref: any, a_ref: any) {
  const scroll_top = body_ref.current.scrollTop;
  let target: HTMLDivElement | null = null;
  let min_dist = Number.POSITIVE_INFINITY;
  for (const element of body_ref.current.children) {
    const offset_top = (element as HTMLDivElement).offsetTop;
    const el_dist = Math.abs(scroll_top - offset_top);
    if (el_dist < min_dist) {
      target = element as HTMLDivElement;
      min_dist = el_dist;
    }
  }
  if (target) {
    const active_a: HTMLAnchorElement = ul_ref.current.querySelector(
      `#${target.dataset.target}`
    );
    if (!(active_a === a_ref.current)) {
      a_ref.current.classList.toggle('active', false);
      active_a.classList.toggle('active', true);
      a_ref.current = active_a;
    }
  }
}

export { scrollSpy };
