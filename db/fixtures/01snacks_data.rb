require "csv"

CSV.foreach('db/fixtures/02tag.csv', headers: true) do |row|
  Tag.create(
    name: row['name']
  )
end

CSV.foreach('db/fixtures/04beer1.csv', headers: true) do |row|
  Snack.create(
    name: row['name'],
    image: row['image'],
    alcohol: row['alcohol']
  )
end

CSV.foreach('db/fixtures/05sake1.csv', headers: true) do |row|
  Snack.create(
    name: row['name'],
    image: row['image'],
    alcohol: row['alcohol']
  )
end

CSV.foreach('db/fixtures/beer2.csv', headers: true) do |row|
  TagRelationship.create(
    snack_id: row['snack_id'],
    tag_id: row['tag_id']
  )
end

CSV.foreach('db/fixtures/sake2.csv', headers: true) do |row|
  TagRelationship.create(
    snack_id: row['snack_id'],
    tag_id: row['tag_id']
  )
end
