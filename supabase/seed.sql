-- Sample data for development and testing
-- Note: You'll need to create test users in Supabase Auth first, then use their UUIDs here

-- Insert sample instructor profile (replace with actual UUID after creating user in Supabase Auth)
-- For testing, you can create a user with email: tamaki@example.com

-- Example: After creating auth user, get their ID and insert:
-- INSERT INTO profiles (id, email, full_name, role, subscription_status)
-- VALUES ('your-uuid-here', 'tamaki@example.com', '玉城竜一', 'instructor', 'active');

-- Sample instructor data
INSERT INTO instructors (id, bio, title, organization, specialties)
VALUES (
  uuid_generate_v4(),
  '介護福祉士、ケアマネジャー。地域密着型サービスの統括管理（居宅、小規模、GH）とデイ管理者を経験しながら、嘉手納町の委託事業などを管理。コロナ禍の沖縄県において、ケアマネ法定研修の完全オンライン化を全国に先駆けて手がけ、翌年には認知症実践者等研修や地域密着型研修の完全オンライン化に携わる。沖縄の介護福祉業界のDXを目指している。',
  '介護統括部長 / 沖縄県認知症介護指導者',
  '社会福祉法人幸仁会比謝川の里',
  ARRAY['ケアマネジメント', '認知症ケア', '介護DX', 'オンライン教育']
) RETURNING id;

-- Sample course: ケアマネ道場
INSERT INTO courses (
  title,
  slug,
  description,
  category,
  difficulty_level,
  is_published,
  is_featured,
  order_index
) VALUES (
  'ケアマネ道場',
  'care-manager-dojo',
  'AI時代のケアマネジメントの本質を学ぶ。玉城竜一氏による全5講義。',
  'ケアマネジメント',
  'intermediate',
  true,
  true,
  1
) RETURNING id;

-- Get the course ID for inserting lessons
-- Replace 'course-id-here' with the actual UUID returned from the above insert

-- Sample lessons for ケアマネ道場
INSERT INTO lessons (course_id, title, slug, description, duration_seconds, order_index, chapter_number, chapter_title, is_published, is_preview)
VALUES
  -- Replace with actual course_id
  (
    (SELECT id FROM courses WHERE slug = 'care-manager-dojo'),
    'ケアプランAIの中に入ろうとしている人　玉城さんの考え',
    'ai-care-planning-tamaki-perspective',
    'AI時代におけるケアマネジャーの役割と価値について、玉城竜一氏が深く語ります。',
    1712, -- 28:32
    1,
    1,
    'AI時代のケアマネジメント',
    true,
    true -- First lesson is free preview
  ),
  (
    (SELECT id FROM courses WHERE slug = 'care-manager-dojo'),
    'なぜこの考え方に？ケアマネ論、倫理',
    'care-management-theory-ethics',
    'ケアマネジメントの本質的な考え方と倫理的な視点について解説します。',
    1935, -- 32:15
    2,
    1,
    'AI時代のケアマネジメント',
    true,
    false
  ),
  (
    (SELECT id FROM courses WHERE slug = 'care-manager-dojo'),
    '教育とメタ認知リフレクション　学び方',
    'education-metacognition-reflection',
    '効果的な学習方法と自己省察の重要性について学びます。',
    1508, -- 25:08
    3,
    2,
    'ケアマネジメントの本質',
    true,
    false
  ),
  (
    (SELECT id FROM courses WHERE slug = 'care-manager-dojo'),
    'スキルのお話し　スキルは言語化',
    'skill-verbalization',
    '暗黙知を形式知に変える、スキルの言語化技術について解説します。',
    1845, -- 30:45
    4,
    3,
    '学びとスキル',
    true,
    false
  ),
  (
    (SELECT id FROM courses WHERE slug = 'care-manager-dojo'),
    'インプットしたものをAI活用してアウトプット　アセス・プランへ反映',
    'ai-assisted-assessment-planning',
    'AIを活用した効率的なアセスメントとケアプラン作成について学びます。',
    1912, -- 31:52
    5,
    4,
    '実践とAI活用',
    true,
    false
  );

-- More sample courses
INSERT INTO courses (title, slug, description, category, is_published, order_index)
VALUES
  ('介護福祉士道場', 'care-worker-dojo', '介護技術と専門知識の習得', '介護技術', true, 2),
  ('介護職員初任者研修道場', 'beginner-care-worker-dojo', '基礎から学ぶ介護の心得', '基礎知識', true, 3),
  ('介護事務道場', 'care-administration-dojo', '請求業務と事務処理の効率化', '事務処理', true, 4),
  ('サ責道場', 'service-manager-dojo', 'サービス提供責任者の実務', 'サービス提供', true, 5),
  ('管理者道場', 'manager-dojo', '組織運営とマネジメント力', 'マネジメント', true, 6),
  ('介護倫理道場', 'care-ethics-dojo', '倫理観と価値観を磨く', '倫理観', true, 7),
  ('介護ニュース', 'care-news', '最新の業界動向と制度改正', '業界動向', true, 8);

-- Sample articles
INSERT INTO articles (title, slug, content, excerpt, category, is_published, published_at, view_count)
VALUES
  (
    '第219回ケアマネ道場における玉城竜一氏の講演を公開しました',
    'tamaki-lecture-219',
    'AI時代のケアマネジメントについて、玉城竜一氏が詳しく解説した第219回ケアマネ道場の講演動画を公開しました。',
    'AIとケアマネジメントの未来について、沖縄県認知症介護指導者の玉城竜一氏が詳しく解説します。',
    '道場の取組',
    true,
    NOW() - INTERVAL '1 day',
    1245
  ),
  (
    '「AI時代のケアマネジメント」に関する高市総理メッセージ',
    'pm-message-ai-care',
    '高市総理からAI時代のケアマネジメントに関するメッセージが発表されました。',
    '政府が推進する介護DXとAI活用について、重要なメッセージが発表されました。',
    '道場の発見',
    true,
    NOW() - INTERVAL '1 day',
    856
  ),
  (
    '沖縄県認知症介護指導者による認知症ケア実践研修の完全オンライン化について',
    'okinawa-dementia-care-online',
    '沖縄県で実施されている認知症ケア実践研修が完全オンライン化されました。',
    '全国に先駆けて実現した、認知症ケア実践研修のオンライン化の取り組みについて紹介します。',
    '道場の一日',
    true,
    NOW() - INTERVAL '2 days',
    623
  );

-- Update course total counts (run after lessons are inserted)
UPDATE courses
SET
  total_lessons = (SELECT COUNT(*) FROM lessons WHERE lessons.course_id = courses.id),
  total_duration_minutes = (SELECT COALESCE(SUM(duration_seconds), 0) / 60 FROM lessons WHERE lessons.course_id = courses.id)
WHERE id IN (SELECT id FROM courses);
