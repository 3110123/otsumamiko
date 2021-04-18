Snack.seed(
  { id: 13, name: 'sake唐揚げ', alcohol: :sake },
  { id: 14, name: 'sakeぎんなん', alcohol: :sake },
  { id: 15, name: 'sakeサラミ', alcohol: :sake },
  { id: 16, name: 'sakeカニカマ', alcohol: :sake },
  { id: 17, name: 'sake桜餅', alcohol: :sake },
  { id: 18, name: 'sakeサラダチキン', alcohol: :sake },
  { id: 19, name: 'sakeやきとり', alcohol: :sake },
  { id: 20, name: 'sake柿の種', alcohol: :sake },
  { id: 21, name: 'sakeチーズケーキ', alcohol: :sake },
  { id: 22, name: 'sake坦々麺', alcohol: :sake },
  { id: 23, name: 'sakeお好み焼き', alcohol: :sake },
  { id: 24, name: 'sakeハンバーガー', alcohol: :sake }
)

TagRelationship.seed(
  { id: 37, snack_id: 13, tag_id: 2 },
  { id: 38, snack_id: 13, tag_id: 3 },
  { id: 39, snack_id: 13, tag_id: 5 },
  { id: 40, snack_id: 14, tag_id: 1 },
  { id: 41, snack_id: 14, tag_id: 3 },
  { id: 42, snack_id: 14, tag_id: 6 },
  { id: 43, snack_id: 15, tag_id: 1 },
  { id: 44, snack_id: 15, tag_id: 3 },
  { id: 45, snack_id: 15, tag_id: 6 },
  { id: 46, snack_id: 16, tag_id: 1 },
  { id: 47, snack_id: 16, tag_id: 3 },
  { id: 48, snack_id: 16, tag_id: 6 },
  { id: 49, snack_id: 17, tag_id: 1 },
  { id: 50, snack_id: 17, tag_id: 4 },
  { id: 51, snack_id: 17, tag_id: 5 },
  { id: 52, snack_id: 18, tag_id: 2 },
  { id: 53, snack_id: 18, tag_id: 3 },
  { id: 54, snack_id: 18, tag_id: 6 },
  { id: 55, snack_id: 19, tag_id: 2 },
  { id: 56, snack_id: 19, tag_id: 3 },
  { id: 57, snack_id: 19, tag_id: 6 },
  { id: 58, snack_id: 20, tag_id: 1 },
  { id: 59, snack_id: 20, tag_id: 3 },
  { id: 60, snack_id: 20, tag_id: 5 },
  { id: 61, snack_id: 21, tag_id: 1 },
  { id: 62, snack_id: 21, tag_id: 4 },
  { id: 63, snack_id: 21, tag_id: 5 },
  { id: 64, snack_id: 22, tag_id: 2 },
  { id: 65, snack_id: 22, tag_id: 3 },
  { id: 66, snack_id: 22, tag_id: 5 },
  { id: 67, snack_id: 23, tag_id: 2 },
  { id: 68, snack_id: 23, tag_id: 3 },
  { id: 69, snack_id: 23, tag_id: 5 },
  { id: 70, snack_id: 24, tag_id: 2 },
  { id: 71, snack_id: 24, tag_id: 3 },
  { id: 72, snack_id: 24, tag_id: 5 }
)
