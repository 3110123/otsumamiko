module ApplicationHelper
  def page_title(page_title = "")
    base_title = "おつまみこ"
    page_title.empty? ? base_title : page_title + " | " + base_title
  end

  def default_meta_tags
    {
      site: 'おつまみこ',
      title: 'コンビニにある食べ物でペアリング',
      reverse: true,
      charset: 'utf-8',
      separator: '|',
      description: 'おつまみこはコンビニにある食べ物でおつまみを探せるアプリです。いつもと違うおつまみを見つけてみましょう！',
      keywords: 'おつまみこ, つまみ, コンビニ つまみ, ペアリング',
      canonical: request.original_url,
      icon: [
        { href: image_url('favicon.ico') },
        { href: image_url('ogp_apple_touch_icon.png'), rel: 'apple-touch-icon', sizes: '180x180', type: 'image/jpg' },
      ],
      og: {
        site_name: :site,
        title: :title,
        description: :description, 
        type: 'website',
        url: request.original_url,
        image: image_url('ogp_twitter_card.png'),
        locale: 'ja_JP',
      },
      twitter: {
        site: '@st3110123',
        card: 'summary_large_image',
        image: image_url('ogp_twitter_card.png'),
      }
    }
  end

  def lazy_image_tag(source, options={})
    options['data-src'] = asset_path(source)
    if options[:class].blank?
      options[:class] = 'lozad'
    else
      options[:class] = "lozad #{options[:class]}"
    end
    image_tag('star-on.png', options)
  end
end
