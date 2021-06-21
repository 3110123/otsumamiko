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
      separator: '|',
      description: 'おつまみこはコンビニにある食べ物でおつまみを探せるアプリです。いつもと違うおつまみを見つけてみましょう！',
      keywords: 'おつまみこ, つまみ, コンビニ つまみ, ペアリング',
      canonical: request.original_url,
      icon: [
        { href: asset_pack_url('media/images/favicon.ico') },
        { href: asset_pack_url('media/images/ogp_apple_touch_icon.png'), rel: 'apple-touch-icon', sizes: '180x180', type: 'image/jpg' },
      ],
      og: {
        site_name: :site,
        title: :title,
        description: :description, 
        type: 'website',
        url: request.original_url,
        image: asset_pack_url('media/images/ogp_twitter_card.png'),
        locale: 'ja_JP',
      },
      twitter: {
        card: 'summary_large_image',
        image: asset_pack_url('media/images/ogp_twitter_card.png'),
      }
    }
  end
end
