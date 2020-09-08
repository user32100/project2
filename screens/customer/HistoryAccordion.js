/* same as Accordion from galio-framework,
    replaced title and content wrap from <Text> to <Title> and
      <Content> respectively */

import React, {useState, useEffect} from 'react';
import {
  Animated,
  TouchableWithoutFeedback,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

import {Block, Icon, GalioTheme} from 'galio-framework';
import theme from '../../theme';
import {Title, Content} from './HistoryDesign';

const {width} = Dimensions.get('screen');

function AccordionContent({content, contentStyle}) {
  return <Content info={content} />;
}

function AccordionHeader({
  expanded,
  expandedIcon,
  headerStyle,
  icon,
  title,
  chapterIcon,
}) {
  return (
    <Block row middle style={[{padding: 6}, headerStyle]}>
      {chapterIcon ? (
        <Icon
          name={chapterIcon.name}
          family={chapterIcon.family}
          size={chapterIcon.size || 14}
          color={chapterIcon.color || theme.COLORS.PRIMARY}
          style={chapterIcon.style || {marginRight: 5}}
        />
      ) : null}
      <Block row space="between" middle flex>
        <Title orderInfo={title} />
        {expanded
          ? expandedIcon || (
              <Icon
                name="keyboard-arrow-up"
                family="material"
                size={16}
                color={theme.COLORS.MUTED}
              />
            )
          : icon || (
              <Icon
                name="keyboard-arrow-down"
                family="material"
                size={16}
                color={theme.COLORS.MUTED}
              />
            )}
      </Block>
    </Block>
  );
}

function AccordionAnimation({children, style}) {
  const [fade, setFade] = useState(new Animated.Value(0.3));

  useEffect(() => {
    Animated.timing(fade, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  });

  return (
    <Animated.View style={{...style, opacity: fade}}>{children}</Animated.View>
  );
}

function AccordionItem({
  expanded,
  expandedIcon,
  headerStyle,
  contentStyle,
  icon,
  index,
  item,
  onAccordionClose,
  onAccordionOpen,
  setSelected,
}) {
  return (
    <Block>
      <TouchableWithoutFeedback
        onPress={() => {
          onAccordionOpen && !expanded && onAccordionOpen(item, index);
          onAccordionClose && expanded && onAccordionClose(item, index);
          setSelected(index);
        }}>
        <Block>
          <AccordionHeader
            expanded={expanded}
            expandedIcon={expandedIcon}
            headerStyle={headerStyle}
            icon={icon}
            title={item.title}
            chapterIcon={item.icon}
          />
        </Block>
      </TouchableWithoutFeedback>
      {expanded ? (
        <AccordionAnimation>
          <AccordionContent
            content={item.content}
            contentStyle={contentStyle}
          />
        </AccordionAnimation>
      ) : null}
    </Block>
  );
}

function HistoryAccordion({
  theme,
  dataArray,
  icon,
  expandedIcon,
  headerStyle,
  contentStyle,
  opened,
  onAccordionOpen,
  onAccordionClose,
  listStyle,
  style,
}) {
  const [selected, setSelected] = useState(opened);

  return (
    <Block style={[styles.container, style]}>
      <FlatList
        data={dataArray}
        extraData={selected}
        style={listStyle}
        keyExtractor={(item, index) => String(index)}
        renderItem={({item, index}) => (
          <AccordionItem
            key={String(index)}
            expanded={selected === index}
            expandedIcon={expandedIcon}
            icon={icon}
            headerStyle={headerStyle}
            contentStyle={contentStyle}
            onAccordionOpen={onAccordionOpen}
            onAccordionClose={onAccordionClose}
            item={item}
            index={index}
            setSelected={(s) => setSelected(selected === s ? undefined : s)}
          />
        )}
      />
    </Block>
  );
}

HistoryAccordion.propTypes = {
  theme: PropTypes.any,
  dataArray: PropTypes.array,
  opened: PropTypes.number,
  listStyle: PropTypes.any,
  style: PropTypes.any,
  icon: PropTypes.any,
  expandedIcon: PropTypes.any,
  headerStyle: PropTypes.any,
  contentStyle: PropTypes.any,
  onAccordionClose: PropTypes.func,
  onAccordionOpen: PropTypes.func,
};

HistoryAccordion.defaultProps = {
  theme: GalioTheme,
  opened: 0,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width * 0.8,
    borderRadius: 16,
    padding: 8,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    backgroundColor: 'white',
  },
  header: {
    padding: 6,
  },
  content: {
    padding: 10,
  },
});

export default HistoryAccordion;
