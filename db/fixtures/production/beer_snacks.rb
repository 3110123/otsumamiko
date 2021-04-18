Snack.seed(
  { id: 1, name: 'ビール唐揚げ', alcohol: :beer },
  { id: 2, name: 'ビールぎんなん', alcohol: :beer },
  { id: 3, name: 'ビールサラミ', alcohol: :beer },
  { id: 4, name: 'ビールカニカマ', alcohol: :beer },
  { id: 5, name: 'ビール桜餅', alcohol: :beer },
  { id: 6, name: 'ビールサラダチキン', alcohol: :beer },
  { id: 7, name: 'ビールやきとり', alcohol: :beer },
  { id: 8, name: 'ビール柿の種', alcohol: :beer },
  { id: 9, name: 'ビールチーズケーキ', alcohol: :beer },
  { id: 10, name: 'ビール坦々麺', alcohol: :beer },
  { id: 11, name: 'ビールお好み焼き', alcohol: :beer },
  { id: 12, name: 'ビールハンバーガー', alcohol: :beer }
)

TagRelationship.seed(
  { id: 1, snack_id: 1, tag_id: 2 },
  { id: 2, snack_id: 1, tag_id: 3 },
  { id: 3, snack_id: 1, tag_id: 5 },
  { id: 4, snack_id: 2, tag_id: 1 },
  { id: 5, snack_id: 2, tag_id: 3 },
  { id: 6, snack_id: 2, tag_id: 6 },
  { id: 7, snack_id: 3, tag_id: 1 },
  { id: 8, snack_id: 3, tag_id: 3 },
  { id: 9, snack_id: 3, tag_id: 6 },
  { id: 10, snack_id: 4, tag_id: 1 },
  { id: 11, snack_id: 4, tag_id: 3 },
  { id: 12, snack_id: 4, tag_id: 6 },
  { id: 13, snack_id: 5, tag_id: 1 },
  { id: 14, snack_id: 5, tag_id: 4 },
  { id: 15, snack_id: 5, tag_id: 5 },
  { id: 16, snack_id: 6, tag_id: 2 },
  { id: 17, snack_id: 6, tag_id: 3 },
  { id: 18, snack_id: 6, tag_id: 6 },
  { id: 19, snack_id: 7, tag_id: 2 },
  { id: 20, snack_id: 7, tag_id: 3 },
  { id: 21, snack_id: 7, tag_id: 6 },
  { id: 22, snack_id: 8, tag_id: 1 },
  { id: 23, snack_id: 8, tag_id: 3 },
  { id: 24, snack_id: 8, tag_id: 5 },
  { id: 25, snack_id: 9, tag_id: 1 },
  { id: 26, snack_id: 9, tag_id: 4 },
  { id: 27, snack_id: 9, tag_id: 5 },
  { id: 28, snack_id: 10, tag_id: 2 },
  { id: 29, snack_id: 10, tag_id: 3 },
  { id: 30, snack_id: 10, tag_id: 5 },
  { id: 31, snack_id: 11, tag_id: 2 },
  { id: 32, snack_id: 11, tag_id: 3 },
  { id: 33, snack_id: 11, tag_id: 5 },
  { id: 34, snack_id: 12, tag_id: 2 },
  { id: 35, snack_id: 12, tag_id: 3 },
  { id: 36, snack_id: 12, tag_id: 5 }
)
